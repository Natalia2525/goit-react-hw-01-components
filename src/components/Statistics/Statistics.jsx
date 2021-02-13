import PropTypes from 'prop-types';
import st from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={st.statistics}>
      {title && <h2 className={st.title}>{title}</h2>}
      <ul className={st.stat_list}>
        {stats.map(({ id, label, percentage }) => (
          <li className="item" key={id}>
            <span className={st.label}>{label}</span>
            <span className={st.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
