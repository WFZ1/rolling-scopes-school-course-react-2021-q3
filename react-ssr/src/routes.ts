import HomePage from './components/home-page/home-page';
import AboutPage from './components/about-page/about-page';
import ArticlePage from './components/article-page/article-page';
import DetailsPage from './components/details-page/details-page';
import NotFoundPage from './components/not-found-page/not-found-page';

export default [
  { path: '/', name: 'Home', Component: HomePage },
  { path: '/about', name: 'About', Component: AboutPage },
  { path: '/details', Component: DetailsPage },
  { path: '/details/:id', Component: ArticlePage },
  { path: '*', Component: NotFoundPage },
];
