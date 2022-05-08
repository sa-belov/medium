import { FunctionComponent, lazy } from 'react';
import { ReactComponent as HomeSvg } from '../assets/svg/home.svg';
import { ReactComponent as NotificationsSvg } from '../assets/svg/notifications.svg';
import { ReactComponent as FavoriteSvg } from '../assets/svg/favorite.svg';
import { ReactComponent as StoriesSvg } from '../assets/svg/stories.svg';
import { ReactComponent as StorySvg } from '../assets/svg/story.svg';

interface IAppRoutes {
  id: string;
  path: string;
  name?: string;
  component: FunctionComponent;
}

export const appRoutes = [
  {
    id: 'main',
    path: '/',
    name: HomeSvg,
    component: lazy(() => import('../pages/Main/Main')),
  },
  {
    id: 'notifications',
    path: '/notifications',
    name: NotificationsSvg,
    component: lazy(() => import('../pages/Notifications/Notifications')),
  },
  { id: 'lists', path: '/lists', name: FavoriteSvg, component: lazy(() => import('../pages/Favorites/Favorites')) },
  { id: 'stories', path: '/stories', name: StoriesSvg, component: lazy(() => import('../pages/Stories/Stories')) },
  { id: 'newStory', path: '/newStory', name: StorySvg, component: lazy(() => import('../pages/NewStory/NewStory')) },
];
