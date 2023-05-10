
import propTypes from 'prop-types';
import {
  ProfileBox,
  ProfileDescription,
  ProfileImage,
  ProfileText,
  ProfileList,
  ProfileListText,
  ProfileListItem,
} from './Profile.styled';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileBox>
      <ProfileDescription>
        <ProfileImage src={avatar} alt="User avatar"  />
        <ProfileText>{username}</ProfileText>
        <ProfileText>@{tag}</ProfileText>
        <ProfileText>{location}</ProfileText>
      </ProfileDescription>

      <ProfileList>
        <ProfileListItem>
          <ProfileListText>Followers</ProfileListText>
          <ProfileListText>{followers}</ProfileListText>
        </ProfileListItem>
        <ProfileListItem>
          <ProfileListText>Views</ProfileListText>
          <ProfileListText>{views}</ProfileListText>
        </ProfileListItem>
        <ProfileListItem>
          <ProfileListText>Likes</ProfileListText>
          <ProfileListText>{likes}</ProfileListText>
        </ProfileListItem>
      </ProfileList>
    </ProfileBox>
  );
};

Profile.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.shape({
    followers: propTypes.number.isRequired,
    views: propTypes.number.isRequired,
    likes: propTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
