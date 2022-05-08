import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { newsPageMock } from '../../mock/newsPageMock/newsPageMock';

export interface INews {
  id: number;
  author: string;
  title: string;
  text: string;
  timeRead: string;
  favorite: boolean;
  img: string;
  avatar: string;
}

export interface INewsState {
  newsList: INews[];
  isLoad: boolean;
}

const initialState: INewsState = {
  newsList: newsPageMock,
  isLoad: false,
};

const newsPageSlice = createSlice({
  name: 'newsPage',
  initialState,
  reducers: {
    addFavorite: (state, { payload }: PayloadAction<INews>) => {
      const index = state.newsList.findIndex((n) => n.id === payload.id);
      if (index !== -1) state.newsList[index] = { ...payload, favorite: true };
    },

    deleteFavorite: (state, { payload }: PayloadAction<INews>) => {
      const index = state.newsList.findIndex((n) => n.id === payload.id);
      if (index !== -1) state.newsList[index] = { ...payload, favorite: false };
    },
  },
});

export const { addFavorite, deleteFavorite } = newsPageSlice.actions;

export default newsPageSlice.reducer;
