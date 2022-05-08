import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../slices';

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }),
});
