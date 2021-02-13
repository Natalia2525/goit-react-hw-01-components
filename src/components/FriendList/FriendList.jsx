import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <ul classNames="friend-list">
      {friends.map(({ avatar, name, id, isOnline }) => (
        <li classNames="item" key={id}>
          <span classNames="status">{isOnline}</span>
          <img classNames="avatar" src={avatar} alt={name} width="48" />
          <p classNames="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  isOnline: PropTypes.bool,
};
export default FriendList;
