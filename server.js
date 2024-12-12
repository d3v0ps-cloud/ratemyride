import express from 'express';
import multer from 'multer';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Check for required environment variables
if (!process.env.DISCORD_WEBHOOK_URL) {
    console.error('Error: DISCORD_WEBHOOK_URL is not set in environment variables');
    process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Middleware setup
app.use(express.static('public'));
const upload = multer();

// Handle POST request for form submission
app.post('/submit', upload.none(), async (req, res) => {
    const { rating, family_member, driver, comment } = req.body;
    
    try {
        await sendToDiscord(family_member, rating, driver, comment);
        res.send('Thank you for your review!');
    } catch (error) {
        console.error('Error sending to Discord:', error);
        res.status(500).send('Error submitting review');
    }
});

async function sendToDiscord(familyMember, rating, driver, comment) {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    
    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: `New review from ${familyMember}: ${rating} stars. The Driver was: ${driver}. Comment: ${comment}`
        })
    });

    if (!response.ok) {
        throw new Error('Failed to send to Discord');
    }
}

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
