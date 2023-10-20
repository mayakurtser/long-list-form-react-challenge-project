import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import StatisticsPage from './pages/statistics/StatisticsPage';
import UsersPage from './pages/users/UsersPage';
import { fetchUsers } from '@slices/usersSlice';
import { MainLayout } from '@layouts/mainLayout';
import styles from './app.module.scss';

const BASENAME = '/long-list-form-react-challenge-project/';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <BrowserRouter basename={BASENAME}>
      <MainLayout className={styles.app}>
        <Routes>
          <Route path='/' exact element={<StatisticsPage />} />
          <Route path='/users/' exact element={<UsersPage />} />
          <Route path='*' exact element={<StatisticsPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>

  );
}

export default App;
