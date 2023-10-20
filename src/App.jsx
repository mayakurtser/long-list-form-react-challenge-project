import { useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '@slices/usersSlice';
import { MainLayout } from '@layouts/mainLayout';
import StatisticsPage from './pages/statistics/StatisticsPage';
import UsersPage from './pages/users/UsersPage';
import styles from './app.module.scss';
import { NotFound } from './pages/notFound';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <HashRouter>
      <MainLayout className={styles.app}>
        <Routes>
          <Route path='/' exact element={<StatisticsPage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </MainLayout>
    </HashRouter>

  );
}

export default App;
