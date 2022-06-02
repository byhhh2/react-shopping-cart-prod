const SERVER_URL = 'https://shopping-cart-mh.herokuapp.com/';
const BASE_URL = '/react-shopping-cart/';

const PRODUCT = {
  MIN_QUANTITY: 1,
};

const MODAL = {
  CLOSE_TIME: 1500,
};

const ROUTES = {
  HOME: '',
  CART: 'cart',
  DETAILS: 'details/:id',
};

const LINK = {
  TO_HOME: '/',
  TO_CART: '/cart',
  TO_DETAILS: '/details',
};

const MESSAGE = {
  LOGIN_SUCCESS: '로그인에 성공하였습니다.',
  LOGIN_FAILURE: '로그인에 실패하였습니다.',
  ALREADY_LOGINED: '이미 로그인되어있습니다.',
  NO_AUTHORIZATION: '접근 권한이 없습니다.',
  LOGOUT_SUCCESS: '로그아웃에 성공하였습니다.',
  LOGOUT_FAILURE: '로그아웃에 실패하였습니다.',
  UPDATE_NICKNAME_SUCCESS: '닉네임 변경에 성공하였습니다.',
  UPDATE_NICKNAME_FAILURE: '닉네임 변경에 실패하였습니다.',
  UPDATE_PASSWORD_SUCCESS: '비밀번호 변경에 성공하였습니다.',
  UPDATE_PASSWORD_FAILUER: '비밀번호 변경에 실패하였습니다.',
  DELETE_ACCOUNT_SUCCESS: '계정 삭제에 성공하였습니다.',
  DELETE_ACCOUT_FAILUER: '계정 삭제에 실패하였습니다.',
  ADD_CART_SUCCESS: '상품을 장바구니에 추가하였습니다.',
  REMOVE_CART_SUCCESS: '상품을 장바구니에서 제거하였습니다.',
};

export { SERVER_URL, BASE_URL, PRODUCT, MODAL, ROUTES, LINK, MESSAGE };
