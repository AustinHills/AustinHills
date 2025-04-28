
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import Header from '../components/header';
import Footer from '../components/footer';

import placeholderImage from '../assets/doctor.jpg';

const strapiBaseUrl = "https://findmydocmain-production.up.railway.app";

export default function DoctorsDetails() {
  const { documentId } = useParams();
  const navigate       = useNavigate();

  const [user,            setUser]            = useState(null);
  const [doctor,          setDoctor]          = useState(null);
  const [reviews,         setReviews]         = useState([]);
  const [error,           setError]           = useState(null);
  const [submittedReview, setSubmittedReview] = useState(null);  // ← new

  const TAG_OPTIONS = [
    'Friendly','Professional','Punctual',
    'Knowledgeable','Compassionate','Attentive',
    'Thorough','Efficient','Courteous',
    'Responsive','Empathetic','Trustworthy',
    'Patient','Organized','Clean',
    'Experienced','Rude','Unprofessional'
  ];

  useEffect(() => {
    const raw = localStorage.getItem('user');
    if (raw) setUser(JSON.parse(raw));
  }, []);

  useEffect(() => {
    if (!documentId) {
      setError("No documentId in URL");
      return;
    }
    fetch(
      `${strapiBaseUrl}/api/doctors?filters[documentId][$eq]=${documentId}&populate=image`
    )
      .then(r => {
        if (!r.ok) throw new Error(`Doctor fetch failed: ${r.status}`);
        return r.json();
      })
      .then(json => {
        const rec = Array.isArray(json.data) ? json.data[0] : json.data;
        if (!rec) throw new Error("Doctor not found");

        const doc = rec.attributes ?? rec;
        const {
          title="No Name", specialty="", location="", education="",
          experience="", phone="", rating=0, description="", image
        } = doc;

        const rawUrl = image?.data?.attributes?.url || image?.url || "";
        const imageUrl = rawUrl.startsWith("http")
          ? rawUrl
          : rawUrl
            ? strapiBaseUrl + rawUrl
            : placeholderImage;

        setDoctor({
          id: rec.id, title, specialty, location,
          education, experience, phone,
          rating: Math.floor(rating), description,
          imageUrl
        });
      })
      .catch(err => setError(err.message));
  }, [documentId]);

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    navigate('/sign-out');
  };

  if (error)   return <div>Error: {error}</div>;
  if (!doctor) return <div>Loading doctor…</div>;

  return (
    <>
      <Header onLogout={handleLogout} user={user} />

      <div className="doctor-content-wrapper">
        {/* Profile Box */}
        <div className="doctor-profile-box">
          <div className="doctor-image-box">
            <img
              src={doctor.imageUrl}
              alt={doctor.title}
              className="doctor-image"
            />
          </div>
          <div className="doctor-info-box">
            <h2>{doctor.title}</h2>
            <p><strong>Specialty:</strong> {doctor.specialty}</p>
            <p><strong>Location:</strong> {doctor.location}</p>
            <p><strong>Education:</strong> {doctor.education}</p>
            <p><strong>Experience:</strong> {doctor.experience}</p>
            <p><strong>Phone:</strong> {doctor.phone}</p>
            <p><strong>Rating:</strong> {'⭐'.repeat(doctor.rating)}</p>
            <p>{doctor.description}</p>
          </div>
        </div>

        {/* Reviews & Form Box */}
        <div className="doctor-reviews-box">
          <h3>Reviews</h3>

          {reviews.map(r => (
            <div key={r.id} className="review-item">
              <div className="review-header">
                <div className="review-rating">{'⭐'.repeat(r.rating)}</div>
                <div className="tag-options">
                  {r.tags.map(tag => (
                    <span key={tag} className="tag-badge">{tag}</span>
                  ))}
                </div>
              </div>
              <p>{r.content}</p>
              <div className="review-author">
                {r.user}{r.phone && ` — ${r.phone}`}
              </div>
            </div>
          ))}

          {user && !submittedReview && (
            <form
              className="review-form"
              onSubmit={e => {
                e.preventDefault();
                const form    = new FormData(e.target);
                const name    = form.get('name')?.trim() || 'Anonymous';
                const content = form.get('content')   || '';
                const phone   = form.get('phone')     || '';
                const tags    = form.getAll('tags');
                const rating  = Number(form.get('rating')) || 0;

                const newReview = {
                  id:      Date.now(),
                  user:    name,
                  content,
                  phone,
                  tags,
                  rating,
                };

                // append locally
                setReviews(rs => [...rs, newReview]);
                // mark as submitted
                setSubmittedReview(newReview);
                // clear form fields
                e.target.reset();
              }}
            >
              <h4>Leave a Review</h4>

              <label>
                Rating
                <select name="rating" required>
                  <option value="">Select…</option>
                  {[1,2,3,4,5].map(n => (
                    <option key={n} value={n}>{n} ⭐</option>
                  ))}
                </select>
              </label>

              <label htmlFor="reviewer-name">Name (optional)</label>
              <input
                id="reviewer-name"
                name="name"
                type="text"
                placeholder="Leave blank for Anonymous"
              />
              <small className="form-help">
                If you don’t enter anything, we’ll display you as “Anonymous.”
              </small>

              <div className="tag-options">
                {TAG_OPTIONS.map(tag => (
                  <label key={tag} className="tag-checkbox">
                    <input type="checkbox" name="tags" value={tag} /> {tag}
                  </label>
                ))}
              </div>

              <label>
                Review
                <textarea name="content" required />
              </label>

              <div className="form-buttons">
                <button type="submit" className="post-button">Post</button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={e => e.target.form.reset()}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {/* after submission: thank you + the one review */}
          {submittedReview && (
            <div className="review-thanks">
              <h4>Thank you for your review!</h4>
              {/* <div className="review-item">
                <div className="review-header">
                  <div className="review-rating">
                    {'⭐'.repeat(submittedReview.rating)}
                  </div>
                  <div className="tag-options">
                    {submittedReview.tags.map(tag => (
                      <span key={tag} className="tag-badge">{tag}</span>
                    ))}
                  </div>
                </div>
                <p>{submittedReview.content}</p>
                <div className="review-author">
                  {submittedReview.user}
                  {submittedReview.phone && ` — ${submittedReview.phone}`}
                </div>
              </div> */}
            </div>
          )}
        </div>

        <Link to="/doctors" className="button-primary">
          ← Back to List
        </Link>
      </div>

      <Footer />
    </>
  );
}
