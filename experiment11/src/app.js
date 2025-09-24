import express from "express";

const app = express();
app.use(express.json())

const users = [
    { id: 1, name: "Aniket", phone: 9876543210 },
    { id: 2, name: "Aditya", phone: 9876553210 },
    { id: 3, name: "Abhigyan", phone: 9877853210 },
]

app.get("/", (req, res) => {
    res.send("hello from server")
})
app.get("/users", (req, res) => {
    res.status(200).json({
        success: true,
        users: users
    })
})

app.post("/users", (req, res) => {
    const { name, phone } = req.body;
    const newUser = {
        id: Date.now(),
        name: name,
        phone: phone
    }
    users.push(newUser);
    res.status(201).json({
        success: true,
        message: "User created successfully",
        users: users
    })
})

app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const user = users.find((u) => u.id === Number(id))
    if (!user) {
        res.status(404).json({
            success: true,
            message: "User not found",
            user: null
        })
    }
    res.status(200).json({
        success: true,
        message: "User found",
        user: user
    })
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
})