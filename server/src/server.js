const express = require('express');
const app = express();
const port = 5001;
const cors = require('cors');
const route = require('./route/index');
const connectDB = require('./config/connect');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const ChatBot = require('./utils/ChatBot');
const path = require('path');
const seedData = require('./seedData');

const http = require('http');
const { Server } = require('socket.io');
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: process.env.CORS_CLIENT,
    },
});

app.use(cookieParser());
app.use(cors({ origin: process.env.CORS_CLIENT, credentials: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '')));
route(app);
app.use(express.static('uploads'));

// Kết nối database và seed dữ liệu
const startServer = async () => {
    try {
        await connectDB();
        console.log('MongoDB connected');

        // Seed dữ liệu mẫu
        await seedData();

        server.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (error) {
        console.error('Lỗi khi khởi động server:', error);
    }
};

startServer();

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('sendMessage', (message) => {
        io.emit('message', message);

        ChatBot(message, io);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});
