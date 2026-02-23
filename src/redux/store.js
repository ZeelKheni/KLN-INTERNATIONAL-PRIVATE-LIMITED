import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import categoriesReducer from './slices/categoriesSlice';
import inquiriesReducer from './slices/inquiriesSlice';
import brochuresReducer from './slices/brochuresSlice';
import certificatesReducer from './slices/certificatesSlice';
import suppliersReducer from './slices/suppliersSlice';
import teamReducer from './slices/teamSlice';
import socialLinksReducer from './slices/socialLinksSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    inquiries: inquiriesReducer,
    brochures: brochuresReducer,
    certificates: certificatesReducer,
    suppliers: suppliersReducer,
    team: teamReducer,
    socialLinks: socialLinksReducer,
  },
}); 