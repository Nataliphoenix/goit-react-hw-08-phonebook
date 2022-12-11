import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations.js';
import { useAuth } from 'hooks';
import { Wrapper, UserName, LogOutBtn } from './UserMenu.styled.js';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </LogOutBtn>
    </Wrapper>
  );
};
