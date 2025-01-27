// @ts-nocheck
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useDispatch } from 'react-redux';
import useCart from 'hooks/domain/useCart';
import useAuth from 'hooks/domain/useAuth';
import useSnackbar from 'hooks/useSnackbar';
import useSpinner from 'hooks/useSpinner';

import {
  ProductListPage,
  ProductDetailPage,
  CartPage,
  LoginPage,
  SignupPage,
  AccountPage,
  PaymentPage,
} from 'page';
import ServerSelectPage from 'page/ServerSelectPage';
import { Layout, Snackbar, GlobalStyles, theme } from 'components';

import { doGetCart } from 'modules/cart';
import { doLogin, doFinish } from 'modules/auth';
import { ROUTES, MESSAGE, PATHNAME } from 'utils/constants';
import RequireAuth from 'components/RequireAuth';
import Spinner from 'components/Spinner';
import axiosInterceptors from 'axiosInterceptors';

axiosInterceptors();

function App() {
  const dispatch = useDispatch();
  const { getCartAPI } = useCart();
  const { isSpinnerVisible } = useSpinner();
  const { getAccountAPI, isAuthenticated, isLoading } = useAuth();
  const { renderSnackbar, isSnackbarVisible, message, status } = useSnackbar();

  const getAccount = async () => {
    try {
      const { nickname } = await getAccountAPI();

      dispatch(doLogin({ nickname }));
      getCart();
    } catch (error) {
      if (
        window.location.pathname === PATHNAME.TO_CART ||
        window.location.pathname === PATHNAME.TO_ACCOUNT
      ) {
        renderSnackbar(MESSAGE.NO_AUTHORIZATION);
      }
    } finally {
      dispatch(doFinish());
    }
  };

  const getCart = async () => {
    try {
      const cart = await getCartAPI();

      dispatch(doGetCart({ cart }));
    } catch (error) {}
  };

  useEffect(() => {
    getAccount();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {!isLoading && (
          <Routes>
            <Route element={<Layout />}>
              <Route path={ROUTES.SERVER} element={<ServerSelectPage />} />
              <Route path={ROUTES.HOME} element={<ProductListPage />} />
              <Route path={ROUTES.DETAILS} element={<ProductDetailPage />} />
              <Route
                path={ROUTES.CART}
                element={
                  <RequireAuth>
                    <CartPage />
                  </RequireAuth>
                }
              />
              <Route path={ROUTES.LOGIN} element={<LoginPage />} />
              <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
              <Route
                path={ROUTES.ACCOUNT}
                element={
                  <RequireAuth>
                    <AccountPage />
                  </RequireAuth>
                }
              />
              <Route
                path={ROUTES.PAY}
                element={
                  <RequireAuth>
                    <PaymentPage />
                  </RequireAuth>
                }
              />
            </Route>
          </Routes>
        )}

        <GlobalStyles />
      </BrowserRouter>

      {isSnackbarVisible && <Snackbar message={message} status={status} />}
      {isSpinnerVisible && <Spinner />}
    </ThemeProvider>
  );
}

export default App;
