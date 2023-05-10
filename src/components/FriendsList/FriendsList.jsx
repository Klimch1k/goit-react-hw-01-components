import propTypes from 'prop-types';
import {
  ListOfFriends,
  ListOfFriendsItem,
  FriendImage,
  FriendStatus,
  FriendName,
} from './FriendsList.styled';

const FriendsList = ({ friends }) => {
  return (
    <ListOfFriends>
      {friends.map(friend => (
        <ListOfFriendsItem key={friend.id}>
          <FriendStatus isOnline={friend.isOnline}></FriendStatus>
          <FriendImage src={friend.avatar} alt="User avatar" width="48" />
          <FriendName>{friend.name}</FriendName>
        </ListOfFriendsItem>
      ))}
    </ListOfFriends>
  );
};

FriendsList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      id: propTypes.number.isRequired,
      isOnline: propTypes.bool.isRequired,
    })
  ),
};

export default FriendsList;
