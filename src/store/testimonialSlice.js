import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, name: 'John Doe', message: 'Great service!' },
  { id: 2, name: 'Jane Smith', message: 'Loved it!' },
];

const testimonialSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {
    addTestimonial: (state, action) => {
      state.push(action.payload);
    },
    updateTestimonial: (state, action) => {
      const index = state.findIndex(testimonial => testimonial.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteTestimonial: (state, action) => {
      return state.filter(testimonial => testimonial.id !== action.payload);
    }
  }
});

export const { addTestimonial, updateTestimonial, deleteTestimonial } = testimonialSlice.actions;

export default testimonialSlice.reducer;
