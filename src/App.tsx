import { BrowserRouter, useRoutes, type RouteObject } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import { AllComics } from './presentation/Comic/AllComics/AllComics'
import { ComicPage } from './presentation/Comic/ComicPage/ComicPage'
import { Favorite } from './presentation/Comic/Favorite/Favorite'

const AppRoutes = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <AllComics /> },
        { path: '/comic/:id', element: <ComicPage /> },
        { path: '/favorite', element: <Favorite /> },
      ],
    },
  ];

  return useRoutes(routes);
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
