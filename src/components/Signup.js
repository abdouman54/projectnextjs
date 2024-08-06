import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { login } from '../store/authSlice';
import styles from '../styles/Signup.module.css'; // Assurez-vous d'ajouter des styles appropriés

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const router = useRouter();

  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};

    if (!formData.firstName) {
      errors.firstName = 'Le prénom est requis';
    }
    if (!formData.lastName) {
      errors.lastName = 'Le nom est requis';
    }
    if (!formData.email) {
      errors.email = "L'email est requis";
    }
    if (!formData.password) {
      errors.password = 'Le mot de passe est requis';
    }

    return errors;
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      dispatch(login({ firstName: formData.firstName, lastName: formData.lastName, email: formData.email }));
      router.push('/');
    }
  };

  return (
    <div className={styles.signup}>
      <h1>Inscription</h1>
      <form onSubmit={handleSignupSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">Prénom :</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleFormDataChange}
          />
          {errors.firstName && <p className={styles.error}>{errors.firstName}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Nom :</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleFormDataChange}
          />
          {errors.lastName && <p className={styles.error}>{errors.lastName}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleFormDataChange}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleFormDataChange}
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}
        </div>
        <button type="submit" className={styles.submitButton}>S'inscrire</button>
      </form>
      <button className={styles.toggleButton} onClick={() => setIsSignup(false)}>
        Déjà inscrit ? Connectez-vous
      </button>
    </div>
  );
};

export default Signup;
