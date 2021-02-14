import PropTypes from 'prop-types';
import st from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={st.friend}>
      {friends.map(({ avatar, name, id, isOnline }) => (
        <li className={st.item} key={id}>
          <span className={isOnline ? `${st.online}` : `${st.offline}`}></span>
          <img className={st.avatar} src={avatar} alt={name} width="48" />
          <p className={st.name}>{name}</p>
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
