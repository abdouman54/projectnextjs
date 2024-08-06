import React from 'react';
import '../styles/globals.css';
import { Provider } from 'react-redux';
import store from '../store';
import { AuthProvider } from '../components/AuthContext';
import { TestimonialsProvider } from '../components/TestimonialsContext';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <TestimonialsProvider>
          <Component {...pageProps} />
        </TestimonialsProvider>
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
