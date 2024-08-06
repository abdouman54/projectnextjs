import React, { useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import AddTestimonials from './AddTestimonials';
import Login from './Login';
import { TestimonialsContext } from './TestimonialsContext';
import styles from '../styles/Testimonials.module.css';

const Testimonials = () => {
  const { testimonials } = useContext(TestimonialsContext);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(false);

  const handleAddTestimonialClick = () => {
    setShowLogin(true);
  };

  return (
    <div className={styles.testimonials}>
      <h1>Témoignages</h1>
      <ul className={styles.testimonialsList}>
        {testimonials.map((testimonial) => (
          <li key={testimonial.id} className={styles.testimonialItem}>
            <p>
              <strong>{testimonial.name}:</strong> {testimonial.message}
            </p>
          </li>
        ))}
      </ul>

      {!user && showLogin && <Login onClose={() => setShowLogin(false)} />}

      {user ? (
        <div>
          <AddTestimonials />
          <button onClick={() => dispatch(logout())} className={styles.logoutButton}>
            Se déconnecter
          </button>
        </div>
      ) : (
        !showLogin && (
          <button onClick={handleAddTestimonialClick} className={styles.addTestimonialButton}>
            Se connecter pour ajouter un témoignage
          </button>
        )
      )}
    </div>
  );
};

export default Testimonials;
