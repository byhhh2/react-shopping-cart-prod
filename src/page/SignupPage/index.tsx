// @ts-nocheck
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSnackbar from 'hooks/useSnackbar';
import useAuth from 'hooks/domain/useAuth';

import { Input, Title, GuideText, AuthButton, Container } from 'components';
import { ReactComponent as EmailIcon } from 'assets/email_icon.svg';
import { ReactComponent as PasswordIcon } from 'assets/pw_icon.svg';
import { ReactComponent as NicknameIcon } from 'assets/nickname_icon.svg';

import { validateEmail, validateNickname, validatePassword } from 'utils/validator';
import { PATHNAME, MESSAGE, SNACKBAR } from 'utils/constants';
import Styled from './index.style';

const SignupPage = () => {
  const navigate = useNavigate();
  const { renderSnackbar } = useSnackbar();
  const { signupAPI, isAuthenticated } = useAuth();

  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const [isFulfilled, setIsFulfilled] = useState(false);
  const [isEmailCorrect, setIsEmailCorrect] = useState(false);
  const [isNicknameCorrect, setIsNicknameCorrect] = useState(false);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      renderSnackbar(MESSAGE.ALREADY_LOGINED, SNACKBAR.FAILED);
      navigate(PATHNAME.TO_HOME);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsFulfilled(isEmailCorrect && isNicknameCorrect && isPasswordCorrect);
  }, [isEmailCorrect, isNicknameCorrect, isPasswordCorrect]);

  const signup = async () => {
    if (!isFulfilled) return;

    try {
      await signupAPI(email, nickname, password);

      renderSnackbar(`${nickname}님, 환영합니다 👋`, SNACKBAR.SUCCESS);
      navigate(PATHNAME.TO_LOGIN);
    } catch (error) {}
  };

  return (
    <Styled.Container>
      <Container width="519px" height="570px">
        <div>
          <Title mainTitle="회원가입" subTitle="처음 뵙겠습니다 👋" />
          <Styled.InputContainer>
            <Input
              type="email"
              icon={<EmailIcon />}
              label="Email Address"
              inputValue={email}
              setInputValue={setEmail}
              validator={validateEmail}
              isCorrect={isEmailCorrect}
              setIsCorrect={setIsEmailCorrect}
            />
            <Input
              icon={<NicknameIcon />}
              label="Nickname"
              inputValue={nickname}
              setInputValue={setNickname}
              validator={validateNickname}
              isCorrect={isNicknameCorrect}
              setIsCorrect={setIsNicknameCorrect}
            />
            <Input
              type="password"
              icon={<PasswordIcon />}
              label="Password"
              inputValue={password}
              setInputValue={setPassword}
              validator={validatePassword}
              isCorrect={isPasswordCorrect}
              setIsCorrect={setIsPasswordCorrect}
            />
          </Styled.InputContainer>
          <AuthButton actionType="Sign Up" action={signup} isDisabled={!isFulfilled} />
          <GuideText
            guide="Already have an account?"
            destination="Login"
            path={PATHNAME.TO_LOGIN}
          />
        </div>
      </Container>
    </Styled.Container>
  );
};

export default SignupPage;
