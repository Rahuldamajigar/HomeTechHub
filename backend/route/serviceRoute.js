// backend/routes/services.js
import express from 'express';
import { Service } from '../model/Service.js';

const router = express.Router();

// Route to get all services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services); // Send JSON response
  } catch (err) {
    res.status(500).send('Error fetching services');
  }
});

export default router;
