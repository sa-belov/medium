import { INewsState } from '../slices/newsPage';
import { IFavoritesState } from '../slices/favoritesPage';

export interface RootState {
  news: INewsState;
  favorites: IFavoritesState;
}
