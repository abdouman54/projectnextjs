// src/components/AddTestimonials.js
import React, { useState, useContext } from 'react';
import { TestimonialsContext } from './TestimonialsContext';
import { AuthContext } from './AuthContext';
import styles from '../styles/AddTestimonials.module.css'; // Import correct

const AddTestimonials = () => {
  const [formData, setFormData] = useState({
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const { addTestimonial } = useContext(TestimonialsContext);
  const { user } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let errors = {};

    if (!formData.message) {
      errors.message = 'Le message est requis';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      addTestimonial({
        name: `${user.firstName} ${user.lastName}`,
        ...formData,
      });
      setSubmitted(true);
    }
  };

  return (
    <div className={styles.addTestimonials}>
      <h1>Ajouter un Témoignage</h1>
      {submitted ? (
        <p className={styles.successMessage}>Merci pour votre témoignage.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
            ></textarea>
            {errors.message && <p className={styles.error}>{errors.message}</p>}
          </div>
          <button type="submit" className={styles.submitButton}>Envoyer</button>
        </form>
      )}
    </div>
  );
};

export default AddTestimonials;
