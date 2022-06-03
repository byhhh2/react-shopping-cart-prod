import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSnackbar from 'hooks/useSnackbar';

import store from 'store/store';
import { doInitializeCart, doLogout } from 'actions/actionCreator';
import { deleteCookie, getCookie } from 'utils/cookie';
import Styled from './index.style';

const UserMenu = ({ nickname }) => {
  const [renderSnackbar] = useSnackbar();

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const logout = async () => {
    try {
      const accessToken = getCookie('accessToken');

      await axios.post(
        '/auth/logout',
        {},
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        },
      );

      deleteCookie('accessToken');
      setIsOpen(false);
      store.dispatch(doInitializeCart());
      store.dispatch(doLogout());
      renderSnackbar('로그아웃이 완료되었습니다.', 'SUCCESS');
      navigate('/');
    } catch (error) {
      renderSnackbar('로그아웃에 실패하였습니다', 'FAILED');
    }
  };

  return (
    <Styled.Container>
      <Styled.NicknameThumbail onClick={toggleMenu}>{nickname[0]}</Styled.NicknameThumbail>
      {isOpen && (
        <Styled.Menu>
          <Styled.Nickname>{nickname}님 👋</Styled.Nickname>
          <Styled.Line />
          <Styled.MenuItem
            onClick={() => {
              navigate('/account');
              setIsOpen(false);
            }}
          >
            회원수정
          </Styled.MenuItem>
          <Styled.Line />
          <Styled.MenuItem onClick={logout}>로그아웃</Styled.MenuItem>
        </Styled.Menu>
      )}
    </Styled.Container>
  );
};

export default UserMenu;
