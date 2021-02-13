import PropTypes from 'prop-types';
import st from './Profile.module.css';

const Profile = ({
  avatar,
  tag,
  name,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={st.profile}>
      <div className="description">
        <img src={avatar} alt="Аватар пользователя" className={st.avatar} />
        <p className={st.name}>{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={st.stats}>
        <li className={st.item}>
          <span className={st.label}>Followers</span>
          <span className={st.quantity}>{followers}</span>
        </li>
        <li className={st.item}>
          <span className={st.label}>Views</span>
          <span className={st.quantity}>{views}</span>
        </li>
        <li className={st.item}>
          <span className={st.label}>Likes</span>
          <span className={st.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
Profile.defaultProps = {
  avatar:
    'https://lh3.googleusercontent.com/proxy/kP1Vb-QNgoZe8oIaJ7gFXk0dcpRTn1LG3EeOok2kAcoz9LHcUWmkIEFJ53ZtnMJIUjwGHTVEqF9gSq1jYH2ZjahcISWI5g',
};
export default Profile;
