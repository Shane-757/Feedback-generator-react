import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <p className="GoodStat">Good: {good}</p>
    <p className="NeutralStat">Neutral: {neutral}</p>
    <p className="BadStat">Bad: {bad}</p>
    <p className="TotalStat">Total: {total}</p>
    <p className="PositivePercentageStat">Positive Feedback Percentage: {positivePercentage.toFixed(2)}%</p>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;