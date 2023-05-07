import propTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list"></ul>
      {stats.map(stat => (
        <li key={stat.id} className="item">
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}</span>
        </li>
      ))}
    </section>
  );
};

Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
      id: propTypes.string.isRequired,
    })
  ).isRequired,
};

export default Statistics;
