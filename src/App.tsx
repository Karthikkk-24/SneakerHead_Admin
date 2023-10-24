import { useWindowSize } from '@app/hooks/useWindowSize';
import { setWindowSize } from '@app/store/reducers/ui';
import { calculateWindowSize } from '@app/utils/helpers';
import ForgetPassword from '@modules/forgot-password/ForgotPassword';
import Login from '@modules/login/Login';
import Main from '@modules/main/Main';
import RecoverPassword from '@modules/recover-password/RecoverPassword';
import Register from '@modules/register/Register';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import About from '@pages/About';
import Accessories from '@pages/Accessories';
import AverageOrder from '@pages/AverageOrder';
import Banner from '@pages/Banner';
import Categories from '@pages/Categories';
import Contact from '@pages/Contact';
import Coupons from '@pages/Coupons';
import Dashboard from '@pages/Dashboard';
import Footer from '@pages/Footer';
// import Login from '@pages/Login';
import BestSellers from '@pages/BestSellers';
import Orders from '@pages/Orders';
import Products from '@pages/Products';
import Ratings from '@pages/Ratings';
import SocialMedia from '@pages/SocialMedia';
import Specials from '@pages/Specials';
import SubCategories from '@pages/SubCategories';
import TopDeals from '@pages/TopDeals';
import Upcoming from '@pages/Upcoming';
import UserNotification from '@pages/UserNotification';
import Users from '@pages/Users';

import Blank from '@pages/Blank';
import SubMenu from '@pages/SubMenu';
import Profile from '@pages/profile/Profile';

import { User } from 'oidc-client-ts';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import { setAuthentication } from './store/reducers/auth';
import {
    GoogleProvider,
    getAuthStatus,
    getFacebookLoginStatus,
} from './utils/oidc-providers';

declare const FB: any;

const App = () => {
  const windowSize = useWindowSize();
  const screenSize = useSelector((state: any) => state.ui.screenSize);
  const dispatch = useDispatch();
  const [isAppLoading, setIsAppLoading] = useState(true);

  const checkSession = async () => {
    try {
      let responses: any = await Promise.all([
        getFacebookLoginStatus(),
        GoogleProvider.getUser(),
        getAuthStatus(),
      ]);

      responses = responses.filter((r: any) => Boolean(r));

      if (responses && responses.length > 0) {
        dispatch(setAuthentication(responses[0]));
      }
    } catch (error: any) {
      console.log('error', error);
    }
    setIsAppLoading(false);
  };

  useEffect(() => {
    checkSession();
  }, []);

  useEffect(() => {
    const size = calculateWindowSize(windowSize.width);
    if (screenSize !== size) {
      dispatch(setWindowSize(size));
    }
  }, [windowSize]);

  if (isAppLoading) {
    return <p>Loading</p>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/register" element={<PublicRoute />}>
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/forgot-password" element={<PublicRoute />}>
          <Route path="/forgot-password" element={<ForgetPassword />} />
        </Route>
        <Route path="/recover-password" element={<PublicRoute />}>
          <Route path="/recover-password" element={<RecoverPassword />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Main />}>
            <Route path="/sub-menu-2" element={<Blank />} />
            <Route path="/sub-menu-1" element={<SubMenu />} />
            <Route path="/blank" element={<Blank />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/banner" element={<Banner />} />
            <Route path="/specials" element={<Specials />} />
            <Route path="/contact-details" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/sub-categories" element={<SubCategories />} />
            <Route path="/products" element={<Products />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/coupons" element={<Coupons />} />
            <Route path="/average-order-details" element={<AverageOrder />} />
            <Route path="/user-list" element={<Users />} />
            <Route path="/user-notification" element={<UserNotification />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/social-media" element={<SocialMedia />} />
            <Route path="/upcoming" element={<Upcoming />} />
            <Route path="/top-deals" element={<TopDeals />} />
            <Route path="/ratings" element={<Ratings />} />
            <Route path="/best-sellers" element={<BestSellers />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer
        autoClose={3000}
        draggable={false}
        position="top-right"
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnHover
      />
    </BrowserRouter>
  );
};

export default App;
