import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './RTK/store';
import Home from './pages/Home/Home';
import TestPage from './pages/Test/TestPage';
import Greetings from './pages/Greetings/Greetings';
import AdminPage from './pages/AdminPage/AdminPage';
import Header from './components/header/Header';
import UsersPage from './pages/UsersPage/UsersPage';
import './App.scss';
import ForgotPassword from './components/forgotPassword/forgotPassword';
import ReportsPage from './pages/ReportsPage/ReportsPage';

const AppContent: React.FC = () => {
  const location = useLocation();

  const pageTitles: Record<string, string> = {
    '/admin': 'Главная',
    '/users': 'Пользователи', 
    '/reports': "Отчеты"
  };

  
  const title = pageTitles[location.pathname] || 'Неизвестная страница';

  return (
    <>
      <Header title={title} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testPage" element={<TestPage />} />
          <Route path="/greetings" element={<Greetings title="Мария Мария Мария" />} />
          <Route path="/admin" element={<AdminPage chartTitle={'Статистика отсутствующих в школе'}  />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} /> 
        </Routes>
      </main>
    </>
  );
};

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <AppContent />
    </Router>
  </Provider>
);

export default App;
