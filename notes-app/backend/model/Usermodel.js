const mongoose=require("./connectionDatabase");
const jwt=require("jsonwebtoken");
const secret="helloWorld!@34321";
let userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

let userModel = mongoose.model("user", userSchema);

async function Login(req, res) {
    try {
        let { username, password } = req.body;

        // Check if user exists in the database
        let user = await userModel.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // console.log(user.password,password);
        // Check if password matches
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        var token = jwt.sign({ username:username }, secret);
        res.cookie('username',token);
        res.status(200).json({ message: "Login successful", user });

    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

async function Signup(req, res) {
    try {
        let { username, email, password } = req.body;

        // Check if username or email already exists
        let existingUser = await userModel.findOne({ $or: [{ username }, { email }] });

        if (existingUser) {
            return res.status(400).json({ message: "Username or email already exists" });
        }

        // Create new user
        let newUser = new userModel({ username, email, password });
        await newUser.save();
        var token = jwt.sign({ username:username }, secret);
        res.cookie('username',token, { maxAge: 900000 });
        res.status(200).json({ message: "Signup successful", user: newUser });

    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

module.exports = { Login, Signup };
