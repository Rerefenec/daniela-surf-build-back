import express from "express";
import cors from "cors";

import getRoutes from "./routes/get.js";
import authRoutes from "./routes/auth.js";
import geocodeRouter from "./routes/geocode.js";
import favoritesRoutes from "./routes/favorites.js";

const app = express();
const port = 3002;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: [
    'http://localhost:3000', 
    'http://localhost:3001', 
    'https://surf-build-front.vercel.app'
  ],
  credentials: true
}));

// Routes
app.use("/", getRoutes);
app.use("/", authRoutes);
app.use("/api", geocodeRouter);
app.use("/api", favoritesRoutes);

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;









