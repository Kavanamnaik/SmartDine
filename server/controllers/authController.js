const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userModel = require("../models/userModel");
exports.register = async (req, res) => {

  const { name, email, password } = req.body; 

    if (!name || !email || !password){
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    userModel.findUserByEmail(email, async (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (result.length > 0) {
            return res.status(400).json({
                message: "Email already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

       const newUser = {
    name,
    email,
    password: hashedPassword,
    role: "customer"
};

        userModel.createUser(newUser, (err) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.status(201).json({
                message: "User Registered Successfully"
            });

        });

    });

};
exports.login = (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Email and Password are required"
        });
    }

    userModel.findUserByEmail(email, async (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        if (result.length === 0) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const user = result[0];

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                role: user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.json({
            message: "Login successful",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    });

};