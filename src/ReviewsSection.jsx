import { useState, useEffect } from "react";

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    comment: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // ✅ Cargar comentarios del backend
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/reviews");
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error al cargar comentarios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Calcular estadísticas
  const totalReviews = reviews.length;
  const averageRating =
    totalReviews > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(
          1,
        )
      : "0.0";
  const fiveStars = reviews.filter((r) => r.rating === 5).length;
  const fourStars = reviews.filter((r) => r.rating === 4).length;
  const threeStars = reviews.filter((r) => r.rating === 3).length;

  // Validar formulario
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formData.rating) newErrors.rating = "La valoración es obligatoria";
    if (!formData.comment.trim())
      newErrors.comment = "El comentario es obligatorio";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Enviar comentario al backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:3000/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          rating: formData.rating,
          comment: formData.comment.trim(),
        }),
      });

      if (response.ok) {
        const newReview = await response.json();
        setReviews([newReview, ...reviews]);
        setFormData({ name: "", email: "", rating: 5, comment: "" });
        setErrors({});
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setShowForm(false);
      } else {
        const error = await response.json();
        setErrors({ submit: error.error || "Error al enviar el comentario" });
      }
    } catch (error) {
      console.error("Error al enviar comentario:", error);
      setErrors({ submit: "Error de conexión con el servidor" });
    }
  };

  // Renderizar estrellas
  const renderStars = (rating, interactive = false) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`star ${index < rating ? "filled" : ""} ${interactive ? "clickable" : ""}`}
        onClick={() =>
          interactive && setFormData({ ...formData, rating: index + 1 })
        }
        onMouseEnter={() =>
          interactive && setFormData({ ...formData, rating: index + 1 })
        }
      >
        ★
      </span>
    ));
  };

  if (loading) {
    return (
      <section id="reviews" className="reviews-section">
        <div className="section-header">
          <span className="section-tag">⭐ Opiniones</span>
          <h2>Cargando opiniones...</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="reviews" className="reviews-section">
      <div className="section-header">
        <span className="section-tag">⭐ Opiniones</span>
        <h2>Lo que dicen nuestros clientes</h2>
        <p>Valoraciones reales de personas que confiaron en Estudio Web</p>
      </div>

      {/* Estadísticas */}
      <div className="reviews-stats">
        <div className="stats-card stats-card-main">
          <div className="stats-number-main">{averageRating}</div>
          <div className="stats-stars-main">
            {renderStars(Math.round(averageRating))}
          </div>
          <div className="stats-label-main">Valoración media</div>
          <div className="stats-total">{totalReviews} opiniones</div>
        </div>

        <div className="stats-card stats-card-distribution">
          <div className="stats-distribution-title">
            Distribución de opiniones
          </div>
          {totalReviews > 0 ? (
            <>
              <div className="distribution-bar">
                <span className="distribution-label">5⭐</span>
                <div className="distribution-track">
                  <div
                    className="distribution-fill"
                    style={{
                      width: `${(fiveStars / totalReviews) * 100}%`,
                      background: "#43e97b",
                    }}
                  />
                </div>
                <span className="distribution-count">{fiveStars}</span>
              </div>
              <div className="distribution-bar">
                <span className="distribution-label">4⭐</span>
                <div className="distribution-track">
                  <div
                    className="distribution-fill"
                    style={{
                      width: `${(fourStars / totalReviews) * 100}%`,
                      background: "#4facfe",
                    }}
                  />
                </div>
                <span className="distribution-count">{fourStars}</span>
              </div>
              <div className="distribution-bar">
                <span className="distribution-label">3⭐</span>
                <div className="distribution-track">
                  <div
                    className="distribution-fill"
                    style={{
                      width: `${(threeStars / totalReviews) * 100}%`,
                      background: "#fee140",
                    }}
                  />
                </div>
                <span className="distribution-count">{threeStars}</span>
              </div>
            </>
          ) : (
            <p
              style={{
                textAlign: "center",
                color: "var(--text)",
                fontSize: "0.9rem",
              }}
            >
              No hay opiniones aún. ¡Sé el primero!
            </p>
          )}
        </div>

        <div className="stats-card stats-card-summary">
          <div className="summary-item">
            <span className="summary-emoji">🌟</span>
            <span className="summary-text">Excelentes</span>
            <span className="summary-number">{fiveStars}</span>
          </div>
          <div className="summary-item">
            <span className="summary-emoji">👍</span>
            <span className="summary-text">Muy buenas</span>
            <span className="summary-number">{fourStars}</span>
          </div>
          <div className="summary-item">
            <span className="summary-emoji">📝</span>
            <span className="summary-text">Total</span>
            <span className="summary-number">{totalReviews}</span>
          </div>
        </div>
      </div>

      {/* Botón para añadir comentario */}
      <div className="add-review-btn-container">
        <button
          className="btn-add-review"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "✖ Cerrar" : "✍️ Escribe tu opinión"}
        </button>
      </div>

      {/* Formulario */}
      {showForm && (
        <div className="review-form-container">
          <form onSubmit={handleSubmit} className="review-form">
            <h3>Deja tu opinión</h3>
            <p className="form-subtitle">Tu opinión nos ayuda a mejorar</p>

            {errors.submit && <div className="error-text">{errors.submit}</div>}

            <div className="form-group">
              <label>Tu nombre *</label>
              <input
                type="text"
                placeholder="Ej: María García"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={errors.name ? "error" : ""}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label>Tu email *</label>
              <input
                type="email"
                placeholder="Ej: maria@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={errors.email ? "error" : ""}
              />
              {errors.email && (
                <span className="error-text">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label>Valoración *</label>
              <div className="rating-input">
                {renderStars(formData.rating, true)}
                <span className="rating-label">
                  {formData.rating} estrellas
                </span>
              </div>
              {errors.rating && (
                <span className="error-text">{errors.rating}</span>
              )}
            </div>

            <div className="form-group">
              <label>Comentario *</label>
              <textarea
                placeholder="Cuéntanos tu experiencia con Estudio Web..."
                value={formData.comment}
                onChange={(e) =>
                  setFormData({ ...formData, comment: e.target.value })
                }
                className={errors.comment ? "error" : ""}
                rows="4"
              />
              {errors.comment && (
                <span className="error-text">{errors.comment}</span>
              )}
            </div>

            <button type="submit" className="btn-submit-review">
              Enviar opinión
            </button>

            {submitted && (
              <div className="success-message">
                ✅ ¡Gracias por tu opinión! Se ha publicado correctamente.
              </div>
            )}
          </form>
        </div>
      )}

      {/* Lista de comentarios */}
      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <div
                className="review-avatar"
                style={{ backgroundColor: review.avatar.color }}
              >
                {review.avatar.emoji}
              </div>
              <div className="review-info">
                <h4>{review.name}</h4>
                <div className="review-stars">{renderStars(review.rating)}</div>
              </div>
            </div>
            <p className="review-comment">{review.comment}</p>
            <div className="review-verified">
              <span>✓ Verificado</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
