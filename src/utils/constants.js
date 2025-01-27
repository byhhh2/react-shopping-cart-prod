const PRODUCT = {
  MIN_QUANTITY: 1,
};

const TIMER = {
  QUANTITY_CONTROLLER_CLOSE_TIME: 1500,
  SNACKBAR_CLOSE_TIME: 3000,
};

const ROUTES = {
  SERVER: 'server',
  HOME: '',
  DETAILS: 'details/:id',
  CART: 'cart',
  LOGIN: 'login',
  SIGNUP: 'signup',
  ACCOUNT: 'account',
  PAY: 'pay/:id',
};

const PATHNAME = {
  TO_SERVER: '/server',
  TO_HOME: '/',
  TO_DETAILS: '/details',
  TO_CART: '/cart',
  TO_LOGIN: '/login',
  TO_SIGNUP: '/signup',
  TO_ACCOUNT: '/account',
  TO_PAY: '/pay',
};

const MESSAGE = {
  LOGIN_SUCCESS: '로그인에 성공하였습니다.',
  LOGIN_FAILURE: '로그인에 실패하였습니다.',
  ALREADY_LOGINED: '이미 로그인되어있습니다.',
  NO_AUTHORIZATION: '접근 권한이 없습니다. 로그인 이후 사용해주세요.',
  LOGOUT_SUCCESS: '로그아웃이 완료되었습니다.',
  LOGOUT_FAILURE: '로그아웃에 실패하였습니다.',
  UPDATE_NICKNAME_SUCCESS: '닉네임 변경에 성공하였습니다.',
  UPDATE_NICKNAME_FAILURE: '닉네임 변경에 실패하였습니다.',
  UPDATE_PASSWORD_SUCCESS: '비밀번호 변경에 성공하였습니다. 다시 로그인 해주세요.',
  UPDATE_PASSWORD_FAILUER: '비밀번호 변경에 실패하였습니다.',
  DELETE_ACCOUNT_SUCCESS: '계정 삭제에 성공하였습니다.',
  DELETE_ACCOUT_FAILUER: '계정 삭제에 실패하였습니다.',
  ADD_CART_SUCCESS: '상품을 장바구니에 추가하였습니다.',
  REMOVE_CART_SUCCESS: '상품을 장바구니에서 제거하였습니다.',
};

const SNACKBAR = {
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
};

const ERROR = {
  1001: '존재하지 않은 URL입니다.',
  1002: '토큰의 유효 기간이 만료되었습니다.',
  1003: '토큰이 유효하지 않습니다. 다시 로그인 해주세요.',
  1004: '인증이 필요한 접근입니다. 로그인 해주세요.',
  2001: '이미 존재하는 이메일입니다.',
  2101: '이메일 형식이 옳지 않습니다.',
  2102: '닉네임 형식이 옳지 않습니다.',
  2103: '비밀번호 형식이 옳지 않습니다.',
  2201: '아이디와 비밀번호를 다시 확인해주세요.',
  2202: '입력된 비밀번호가 현재 비밀번호와 일치하지 않습니다.',
  3001: '해당 상품 가져오기를 실패했습니다.',
  4001: '해당 상품이 장바구니에 존재하지 않습니다.',
  4101: '수량 형식이 맞지 않습니다.',
  5001: '존재하지 않는 주문입니다.',
};

const ERROR_MESSAGE_FROM_SERVER = {
  1001: '존재하지 않은 URL입니다.',
  1002: '토큰의 유효 기간이 만료되었습니다.',
  1003: '토큰이 유효하지 않습니다.',
  1004: '인증이 필요한 접근입니다.',
  2001: '이미 존재하는 이메일입니다.',
  2101: '이메일 형식이 맞지 않습니다.',
  2102: '닉네임 형식이 맞지 않습니다.',
  2103: '비밀번호 형식이 맞지 않습니다.',
  2201: '이메일 혹은 비밀번호가 일치하지 않습니다.',
  2202: '입력된 비밀번호가 현재 비밀번호와 일치하지 않습니다.',
  3001: '상품 목록에서 요청하신 상품이 존재하지 않습니다.',
  4001: '해당 상품이 장바구니에 존재하지 않습니다.',
  4101: '수량 형식이 맞지 않습니다.',
  5001: '존재하지 않는 주문입니다.',
};

const URL = {
  DEV_SERVER: 'http://localhost:3000/',
  이프_서버: 'http://ec2-3-39-234-109.ap-northeast-2.compute.amazonaws.com:8080/',
  더즈_서버: 'http://15.164.211.129:8080/',
  토르_서버: 'http://ec2-15-164-232-166.ap-northeast-2.compute.amazonaws.com:8080/',
  찬_서버: 'http://ec2-3-34-130-116.ap-northeast-2.compute.amazonaws.com:8080/',
};

export {
  PRODUCT,
  TIMER,
  ROUTES,
  PATHNAME,
  MESSAGE,
  SNACKBAR,
  ERROR,
  ERROR_MESSAGE_FROM_SERVER,
  URL,
};
