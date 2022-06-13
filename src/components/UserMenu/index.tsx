import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useSnackbar from 'hooks/useSnackbar';

import { doInitializeCart } from 'modules/cart';
import { doLogout } from 'modules/auth';
import { deleteCookie } from 'utils/cookie';
import { PATHNAME, MESSAGE, SNACKBAR } from 'utils/constants';
import Styled from './index.style';

const UserMenu = ({ nickname }) => {
  const dispatch = useDispatch();
  const { renderSnackbar } = useSnackbar();

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const logout = () => {
    deleteCookie('accessToken');
    dispatch(doInitializeCart());
    dispatch(doLogout());
    setIsOpen(false);
    renderSnackbar(MESSAGE.LOGOUT_SUCCESS, SNACKBAR.SUCCESS);
    navigate(PATHNAME.TO_HOME);
  };

  return (
    <Styled.Container>
      <Styled.NicknameThumbail onClick={toggleMenu}>{nickname[0]}</Styled.NicknameThumbail>
      {isOpen && (
        <Styled.Menu>
          <Styled.NicknameContainer>
            <Styled.Nickname>{nickname}</Styled.Nickname>님, 안녕하세요 👋
          </Styled.NicknameContainer>

          <Styled.MenuItem
            onClick={() => {
              navigate(PATHNAME.TO_ACCOUNT);
              setIsOpen(false);
            }}
          >
            회원수정
          </Styled.MenuItem>
          <Styled.MenuItem onClick={logout}>로그아웃</Styled.MenuItem>
        </Styled.Menu>
      )}
      {isOpen && <Styled.Dimmer onClick={toggleMenu} />}
    </Styled.Container>
  );
};

export default UserMenu;
