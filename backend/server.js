/* eslint-disable no-undef */

import express from "express";
import cors from "cors";
import Stripe from "stripe";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const REVIEWS_FILE = "reviews.json";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// ✅ CORS CON * - PERMITE TODOS LOS ORÍGENES
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.json());

// ============================================
// ✅ COMENTARIOS - GUARDADOS EN ARCHIVO JSON
// ============================================

// Avatares predefinidos
const AVATARS = [
  { color: "#667eea", emoji: "👩‍💻" },
  { color: "#f093fb", emoji: "👨‍💻" },
  { color: "#4facfe", emoji: "🧑‍💻" },
  { color: "#43e97b", emoji: "👩‍🎨" },
  { color: "#fa709a", emoji: "👨‍🎨" },
  { color: "#fee140", emoji: "🧑‍🏫" },
  { color: "#f5576c", emoji: "👩‍🔬" },
  { color: "#4facfe", emoji: "👨‍🔬" },
];

// Comentarios iniciales
const DEFAULT_REVIEWS = [
  {
    id: 1,
    name: "María García",
    email: "maria@empresa.com",
    rating: 5,
    comment:
      "Excelente trabajo. Mi página web quedó espectacular y el proceso fue muy sencillo. Totalmente recomendable.",
    avatar: AVATARS[0],
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    email: "carlos@tiendaonline.es",
    rating: 5,
    comment:
      "Estudio Web transformó mi negocio. La tienda online funciona perfectamente y las ventas han aumentado un 40%. ¡Gracias!",
    avatar: AVATARS[1],
  },
  {
    id: 3,
    name: "Laura Martínez",
    email: "laura@consultora.com",
    rating: 5,
    comment:
      "Profesional y atento. Entendió exactamente lo que necesitaba y lo ejecutó a la perfección. 100% recomendable.",
    avatar: AVATARS[2],
  },
  {
    id: 4,
    name: "Javier López",
    email: "javier@startup.es",
    rating: 4,
    comment:
      "Muy buen trabajo, el diseño es impecable. Solo le pondría una pega: el tiempo de entrega fue un poco más largo de lo esperado.",
    avatar: AVATARS[3],
  },
  {
    id: 5,
    name: "Ana Sánchez",
    email: "ana@fotografia.com",
    rating: 4,
    comment:
      "La web es preciosa y muy funcional. El soporte post-venta es excelente. Quizás el precio podría ser un poco más ajustado.",
    avatar: AVATARS[4],
  },
];

// Leer comentarios del archivo o crear uno nuevo
const loadReviews = () => {
  try {
    if (fs.existsSync(REVIEWS_FILE)) {
      const data = fs.readFileSync(REVIEWS_FILE, "utf8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error al leer reviews.json:", error);
  }
  return DEFAULT_REVIEWS;
};

// Guardar comentarios en archivo
const saveReviews = (reviews) => {
  try {
    fs.writeFileSync(REVIEWS_FILE, JSON.stringify(reviews, null, 2));
  } catch (error) {
    console.error("Error al guardar reviews.json:", error);
  }
};

let reviews = loadReviews();
let nextId = reviews.reduce((max, r) => Math.max(max, r.id), 0) + 1;

// ✅ Obtener todos los comentarios
app.get("/api/reviews", (req, res) => {
  res.json(reviews);
});

// ✅ Añadir un nuevo comentario
app.post("/api/reviews", (req, res) => {
  const { name, email, rating, comment } = req.body;

  if (!name || !email || !rating || !comment) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: "Email inválido" });
  }

  if (rating < 1 || rating > 5) {
    return res.status(400).json({ error: "Valoración inválida (1-5)" });
  }

  const randomAvatar = AVATARS[Math.floor(Math.random() * AVATARS.length)];
  const newReview = {
    id: nextId++,
    name: name.trim(),
    email: email.trim(),
    rating: rating,
    comment: comment.trim(),
    avatar: randomAvatar,
  };

  reviews = [newReview, ...reviews];
  saveReviews(reviews);
  res.status(201).json(newReview);
});

// ✅ Eliminar un comentario
app.delete("/api/reviews/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = reviews.findIndex((r) => r.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Comentario no encontrado" });
  }

  reviews.splice(index, 1);
  saveReviews(reviews);
  res.json({ message: "Comentario eliminado" });
});

// ============================================
// STRIPE - PAGOS
// ============================================

app.get("/api/health", (req, res) => {
  res.json({ status: "Servidor funcionando ✅" });
});

app.post("/api/create-payment-intent", async (req, res) => {
  try {
    console.log("📥 Petición recibida:", req.body);
    const { amount, currency = "eur" } = req.body;

    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: "Monto inválido" });
    }

    console.log(`💰 Creando PaymentIntent de ${amount}€`);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100),
      currency: currency,
      payment_method_types: ["card"],
    });

    console.log("✅ PaymentIntent creado:", paymentIntent.id);

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(
    `🔑 Clave Stripe: ${process.env.STRIPE_SECRET_KEY ? "✅ Cargada" : "❌ No cargada"}`,
  );
  console.log(`📝 Comentarios guardados en: ${REVIEWS_FILE}`);
});
