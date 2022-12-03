import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations.js';
import { useAuth } from 'hooks';
import { Wrapper, UserName } from './UserMenu.styled.js';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Wrapper>
  );
};
