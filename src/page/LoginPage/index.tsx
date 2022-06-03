// @ts-nocheck
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import useSnackbar from 'hooks/useSnackbar';

import { Input, Title, GuideText, AuthButton, Container } from 'components';
import { ReactComponent as EmailIcon } from 'assets/email_icon.svg';
import { ReactComponent as PasswordIcon } from 'assets/pw_icon.svg';

import store from 'store/store';
import { doLogin } from 'actions/actionCreator';
import { setCookie, getCookie } from 'utils/cookie';
import { MESSAGE } from 'utils/constants';
import Styled from './index.style';

const LoginPage = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!getCookie('accessToken');

  const [isFulfilled, setIsFulfilled] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [renderSnackbar] = useSnackbar();

  useEffect(() => {
    if (isAuthenticated) {
      renderSnackbar(MESSAGE.ALREADY_LOGINED, 'FAILED');
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (email.length >= 3 && password.length >= 10) {
      setIsFulfilled(true);
      return;
    }
    setIsFulfilled(false);
  }, [email, password]);

  const login = async () => {
    if (!isFulfilled) return;

    try {
      const response = await axios.post('/auth/login', {
        email,
        password,
      });

      setCookie('accessToken', response.data.accessToken);
      store.dispatch(doLogin({ nickname: response.data.nickname }));
      renderSnackbar(`${response.data.nickname}님 환영합니다 👋`, 'SUCCESS');
      navigate('/');
    } catch (error) {
      renderSnackbar(`아이디와 비밀번호를 다시 확인해주세요.`, 'FAILED');
    }
  };

  return (
    <Styled.Container>
      <Container width="505px" height="440px">
        <div>
          <Title mainTitle="로그인" subTitle="환영합니다 👋" />
          <Input
            type="email"
            icon={<EmailIcon />}
            label="Email Address"
            inputValue={email}
            setInputValue={setEmail}
          />
          <Input
            type="password"
            icon={<PasswordIcon />}
            label="Password"
            inputValue={password}
            setInputValue={setPassword}
          />
          <AuthButton actionType="Login" action={login} isDisabled={!isFulfilled} />
          <GuideText guide="Don’t have an account?" destination="Sign up" path="/signup" />
        </div>
      </Container>
    </Styled.Container>
  );
};

export default LoginPage;
