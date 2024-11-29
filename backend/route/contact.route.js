import express from 'express';
import Contact from '../model/contact.model.js';

const router = express.Router();

// Handle contact form submissions
router.post('/', async (req, res) => {
    const { subject, message } = req.body;

    // Validate the input
    if (!subject || !message) {
        return res.status(400).json({ message: 'Both subject and message are required.' });
    }

    try {
        // Save the message to the database
        const newContact = new Contact({ subject, message });
        await newContact.save();
        res.status(201).json({ message: 'Your message has been received. We will contact you soon!' });
    } catch (error) {
        console.error('Error saving contact message:', error);
        res.status(500).json({ message: 'Failed to submit the message. Please try again.' });
    }
});

export default router;
