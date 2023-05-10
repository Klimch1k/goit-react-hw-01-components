import styled from '@emotion/styled';

export const ListOfFriends = styled.ul`
    list-style: none;
    padding: 0;
 margin-top: 40px;
 margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ListOfFriendsItem = styled.li`
  display: flex;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 200px;
`;
export const FriendStatus = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => props.isOnline ? '#008000' : '#ff0000'}
`;
export const FriendImage = styled.img`
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-right: 10px;
`;

export const FriendName = styled.p`
    font-size: 20px;
    font-weight: bold;
`;

