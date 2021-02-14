import PropTypes from "prop-types";
import st from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul classNames={st.friend}>
      {friends.map(({ avatar, name, id, isOnline }) => (
        <li classNames={st.item} key={id}>
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
