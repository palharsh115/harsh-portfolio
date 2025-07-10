const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.get('/', (req, res) => {
  res.render('layout', { title: 'Harsh-Portfolio' });
});

router.get('/about', (req, res) => {
  res.render('layout', { title: 'About Me' });
});

// Contact form POST route
router.post('/contact', async (req, res) => {
  console.log('Received form data:', req.body); // Debug: log incoming data
  try {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(200).json({ success: true, message: 'Message received!' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

// Get all contact messages
router.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;