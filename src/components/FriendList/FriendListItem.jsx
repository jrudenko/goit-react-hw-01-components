import PropTypes from "prop-types";
import { FriendItem, Status, Avatar, Name} from './FriendList.style';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <FriendItem key={id}>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}

