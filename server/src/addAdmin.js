const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Replace with your MongoDB connection string from .env
const dbURI = "mongodb://localhost:27017/tmdt";

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

// Import the actual User model
const User = require('./model/ModelUser');

db.once('open', async () => {
    console.log('Connected to MongoDB');

    try {
        // Check if admin already exists
        const existingAdmin = await User.findOne({ isAdmin: true });
        
        if (existingAdmin) {
            console.log('Admin account already exists:', existingAdmin.email);
        } else {
            // Hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash('admin123', salt);
            
            // Add a new admin account
            const newAdmin = new User({
                fullname: 'Admin User',
                email: 'admin@example.com',
                password: hashedPassword,
                isAdmin: true,
                phone: 1234567890
            });

            await newAdmin.save();
            console.log('Admin account added successfully:', newAdmin);
        }
    } catch (error) {
        console.error('Error managing admin account:', error);
    } finally {
        mongoose.connection.close();
    }
});

db.on('error', console.error.bind(console, 'Connection error:'));