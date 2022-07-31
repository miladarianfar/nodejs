const User = require('../models/userModel');

const signupUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.signup(email, password);
        res.status(200).json({email, user})
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

const login = (req, res) => {
    res.json({message: 'POST user login'})
}

module.exports = { signupUser, login }