import React, { createContext, useState, useEffect } from 'react';

const TestimonialsContext = createContext();

const TestimonialsProvider = ({ children }) => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const storedTestimonials = localStorage.getItem('testimonials');
    if (storedTestimonials) {
      setTestimonials(JSON.parse(storedTestimonials));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  const addTestimonial = (testimonial) => {
    const newTestimonial = { id: testimonials.length + 1, ...testimonial };
    setTestimonials((prevTestimonials) => [...prevTestimonials, newTestimonial]);
  };

  return (
    <TestimonialsContext.Provider value={{ testimonials, addTestimonial }}>
      {children}
    </TestimonialsContext.Provider>
  );
};

export { TestimonialsProvider, TestimonialsContext };
