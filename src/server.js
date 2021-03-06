import express from "express";

const PORT = 4000;

const app = express();


const handlHome = (req, res) => {
    return res.send("I still love you.");
}


const handleLogin = (req, res) => {
    return res.send("Login here.");
}

app.get("/",handlHome);
app.get("/login",handleLogin);

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🍕`);

app.listen(PORT, handleListening);