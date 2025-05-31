const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Replace with your MongoDB connection string from .env
const dbURI = 'mongodb://localhost:27017/tmdt';

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

// Import the actual User model
const User = require('./model/ModelUser');

db.once('open', async () => {
    console.log('Connected to MongoDB');

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email: 'user@example.com' });

        if (existingUser) {
            console.log('User account already exists:', existingUser.email);
        } else {
            // Hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash('user123', salt);

            // Add a new user account
            const newUser = new User({
                fullname: 'Regular User',
                email: 'user@example.com',
                password: hashedPassword,
                isAdmin: false,
                phone: 9876543210,
            });

            await newUser.save();
            console.log('User account added successfully:', newUser);
        }
    } catch (error) {
        console.error('Error managing user account:', error);
    } finally {
        mongoose.connection.close();
    }
});

db.on('error', console.error.bind(console, 'Connection error:'));
