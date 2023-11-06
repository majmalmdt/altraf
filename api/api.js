require("dotenv").config();
const router = require("express").Router();
const fileUpload = require("express-fileupload");
const axios = require("axios");
const FormData = require("form-data");
const Readable = require("stream").Readable;
const md5 = require("md5");
const jwt = require("jsonwebtoken");

var connection;

const makeQuery = async (query) => {
    return new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
};

const uploadImage = async (buffer) => {
    const form = new FormData();
    const stream = new Readable();
    stream.push(buffer);
    stream.push(null);
    form.append("image", stream);
    let { data } = await axios.post("https://api.imgur.com/3/image", form, {
        headers: {
            Authorization: "Client-ID 2bbb6855ba395f4",
        },
    });
    if (data.status == 200) {
        return data.data.link;
    } else {
        return "";
    }
};

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.status(401).json({ error: "Login to continue" });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err) => {
        if (err) return res.status(401).json({ error: "Authorization token is no longer valid" });
        next();
    });
};

router.get("/get-news", async (req, res) => {
    try {
        const data = await makeQuery("SELECT * FROM news");
        res.json(data.reverse());  
    } catch (error) {
        
    }

});
router.post("/upload-news", authenticateToken, fileUpload(), async (req, res) => {
    try {
        const { title, date, text } = req.body;
        const imageData = req.files.image.data;
        const image = imageData ? await uploadImage(imageData) : "";
        const query = `INSERT INTO news (image, title, text, date) VALUES ('${image}', '${title}', '${text}', '${date}');`;
        const sendQuery = await makeQuery(query);
        res.status(200);
    } catch (error) {
        res.status(400);
    }
    try {
        res.send((await makeQuery("SELECT * FROM news")).reverse());
    } catch (error) {
        
    }
    
});
router.post("/delete-news", authenticateToken, fileUpload(), async (req, res) => {
    try {
        const { id, title, image } = req.body;
        const query = `DELETE FROM news WHERE id = ${id}`;
        const sendQuery = await makeQuery(query);
        res.status(200);
    } catch (error) {
        res.status(400);
    }

    try {
        res.send((await makeQuery("SELECT * FROM news")).reverse());
    } catch (error) {
        
    }
});

router.get("/get-messages", authenticateToken, async (req, res) => {
    try {
      const data = await makeQuery("SELECT * FROM messages");
    res.json(data.reverse());  
    } catch (error) {
        
    }
    
});
router.post("/new-message", async (req, res) => {
    const { name, email, phone, message } = req.body;
    try {
        const query = `INSERT INTO messages (name, email, phone, message, time) VALUES ('${name}', '${email}', '${phone}', '${message}', '${new Date().toString()}');`;
        const sendQuery = await makeQuery(query);
        res.status(200).json({ message: "Message received" });
    } catch (error) {
        res.status(401).json({ message: "Message not received" });
    }
    // res.json({name, email, phone, message});
});
router.post("/delete-message", authenticateToken, async (req, res) => {
    try {
        const { id } = req.body;
        const query = `DELETE FROM messages WHERE id = ${id}`;
        const sendQuery = await makeQuery(query);
        res.status(200);
    } catch (error) {
        res.status(400);
    }

    res.send((await makeQuery("SELECT * FROM messages")).reverse());
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const hashedPassword = md5(password);
    const query = `SELECT * FROM admins WHERE username = '${username}' AND password = '${hashedPassword}'`;
    try {
        const checkUsernameAndPassword = await makeQuery(query);
        if (checkUsernameAndPassword.length != 0) {
            const token = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "6h" });
            res.json({ token });
        } else {
            res.status(401).json({ error: "Invalid username or password" });
        }
    } catch (error) {
        res.status(401).json({ error: "Invalid username or password" });
    }
});

router.get("/verify", authenticateToken, (req, res) => {
    res.status(200).json({ message: "Everything is OK" });
});
module.exports = (con) => {
    connection = con;
    return router;
};
