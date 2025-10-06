import express from 'express';
import { 
  signup, 
  changePassword, 
  updateProfile, 
  login, 
  logout, 
  refreshToken, 
  getProfile 
} from '../controllers/authController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Auth routes
router.post('/signup', signup);
router.post('/change-password', authenticateToken, changePassword); // sécurité : authentification requise
router.post('/login', login);
router.post('/refresh-token', refreshToken);
router.post('/logout', authenticateToken, logout); // logout sécurisé

// Profile routes
router.get('/profile', authenticateToken, getProfile);
router.post('/change-profile', authenticateToken, updateProfile);

export default router;
