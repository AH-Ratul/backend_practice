const authServies = require("../services/authServices");

async function loginUser (req, res) {
    try {
        const {email, password} = req.body;
        const {user, token} = await authServies.authenticateUser(email, password);
        res.json({user, token});
    } catch (error) {
        console.log(error);
        throw new Error("error while logging");
    }
}

module.exports = {loginUser};