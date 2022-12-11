import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
`;

export const UserName = styled.p`
  font-weight: 700;
`;

export const LogOutBtn = styled.button`
  margin-left: auto;
  margin-right: auto;
  padding: 8px;
  width: 120px;
  border-radius: 8px;
  border: 1px solid #edc7b7;
  cursor: pointer;
  background-color: #eee2dc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: #bab2b5;
  }
`;
