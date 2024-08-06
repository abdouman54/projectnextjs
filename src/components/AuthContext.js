// src/components/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize user as null

  // Load the user from localStorage after the component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []); // Empty dependency array means this runs once after the component mounts

  // Update localStorage whenever the user state changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]); // Run this effect whenever the user changes

  const login = (email, password) => {
    // Simulate a login operation
    const newUser = { firstName: 'John', lastName: 'Doe', email };
    setUser(newUser);
  };

  const signup = (firstName, lastName, email, password) => {
    // Simulate a signup operation
    const newUser = { firstName, lastName, email };
    setUser(newUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
