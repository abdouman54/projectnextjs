import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { login } from '../store/authSlice';
import styles from '../styles/Login.module.css';

const Login = ({ onClose }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const router = useRouter();

  const handleCredentialsChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleFormDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateLogin = () => {
    const errors = {};
    if (!credentials.email) errors.email = 'Email is required';
    if (!credentials.password) errors.password = 'Password is required';
    return errors;
  };

  const validateSignup = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.password) errors.password = 'Password is required';
    return errors;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateLogin();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      dispatch(login({ firstName: 'John', lastName: 'Doe', email: credentials.email }));
      router.push('/');
      onClose();
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateSignup();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      dispatch(login({ firstName: formData.firstName, lastName: formData.lastName, email: formData.email }));
      router.push('/');
      onClose();
    }
  };

  return (
    <div className={styles.authForm}>
      {isSignup ? (
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
      ) : (
        <div className={styles.login}>
          <h1>Connexion</h1>
          <form onSubmit={handleLoginSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email :</label>
              <input
                type="email"
                id="email"
                name="email"
                value={credentials.email}
                onChange={handleCredentialsChange}
              />
              {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Mot de passe :</label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleCredentialsChange}
              />
              {errors.password && <p className={styles.error}>{errors.password}</p>}
            </div>
            <button type="submit" className={styles.submitButton}>Se connecter</button>
          </form>
          <button className={styles.toggleButton} onClick={() => setIsSignup(true)}>
            Pas encore inscrit ? Créez un compte
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
