import { CART_ACTIONS, PRODUCT_LIST_ACTIONS, ORDER_ACTIONS, AUTH_ACTIONS } from 'actions/action';

const doPutProductToCart = ({ id, quantity }) => ({ type: CART_ACTIONS.PUT, id, quantity });

const doDeleteProductFromCart = ({ id }) => ({ type: CART_ACTIONS.DELETE, id });

const doSelectiveDeleteFromCart = () => ({ type: CART_ACTIONS.SELECTIVE_DELETE });

const doInitializeCart = ({ products }) => ({ type: PRODUCT_LIST_ACTIONS.INITIALIZE, products });

const doAddProdcutToOrder = ({ id }) => ({ type: ORDER_ACTIONS.ADD, id });

const doDeleteProductFromOrder = ({ id }) => ({ type: ORDER_ACTIONS.DELETE, id });

const doInitializeOrder = () => ({ type: ORDER_ACTIONS.INITIALIZE });

const doLogin = ({ nickname }) => ({ type: AUTH_ACTIONS.LOGIN, nickname });

const doLogout = () => ({ type: AUTH_ACTIONS.LOGOUT });

export {
  doPutProductToCart,
  doDeleteProductFromCart,
  doSelectiveDeleteFromCart,
  doInitializeCart,
  doAddProdcutToOrder,
  doDeleteProductFromOrder,
  doInitializeOrder,
  doLogin,
  doLogout,
};
