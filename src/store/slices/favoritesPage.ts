import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { newsPageMock } from '../../mock/newsPageMock/newsPageMock';

interface INews {
  id: number;
  author: string;
  title: string;
  text: string;
  timeRead: string;
  favorite: boolean;
  img: string;
  avatar: string;
}

export interface INewsList {
  id: number;
  title: string;
  news: INews[];
}

export interface IFavoritesState {
  newsLists: INewsList[];
  isLoad: boolean;
}

const initialState: IFavoritesState = {
  newsLists: [
    {
      id: Date.now(),
      title: 'Reading list',
      news: [],
    },
  ],
  isLoad: false,
};

const favoritePageSlice = createSlice({
  name: 'newsPage',
  initialState,
  reducers: {},
});

export const {} = favoritePageSlice.actions;

export default favoritePageSlice.reducer;
