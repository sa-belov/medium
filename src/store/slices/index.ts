import { combineReducers } from '@reduxjs/toolkit';
import newsPageSlice from './newsPage';
import favoritesPageSlice from './favoritesPage';
import { RootState } from '../store/type';

const rootReducer = combineReducers<RootState>({
  news: newsPageSlice,
  favorites: favoritesPageSlice,
});

export default rootReducer;
