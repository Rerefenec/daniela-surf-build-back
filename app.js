
import express from "express";
import cors from 'cors';
import express from 'express';

const app = express();

// ✅ Configuration CORS plus complète
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:3001', 
    'https://surf-build-back-konh2b1mh-delormes-projects-0785702a.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// ✅ Ajoutez ceci AVANT vos routes
app.options('*', cors()); // Gérer les requêtes preflight

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;









