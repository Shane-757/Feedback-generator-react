import React, { useState } from 'react';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/SectionTitle/SectionTitle';
import Notification from 'components/Notifications/Notifications';
//import PropTypes from 'prop-types';

const StatisticsApp = (props) => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const [h1Color, setH1Color] = useState('black');

  const handleLeaveFeedback = (feedbackType) => {
    setState((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));

    if (feedbackType === 'good') {
      setH1Color('green');
    } else if (feedbackType === 'bad') {
      setH1Color('red');
    } else if (feedbackType === 'neutral') {
    setH1Color('black');
  }
  };

  const totalFeedback = state.good + state.neutral + state.bad;
  const positivePercentage = totalFeedback > 0 ? (state.good / totalFeedback) * 100 : 0;

  const hasFeedback = totalFeedback > 0;

  return (
    <div>
      <h1 style={{ color: h1Color }}>Please Leave Feedback</h1>
      <Section title="Feedback Options">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {hasFeedback ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

//there is no need to use PropTypes in this component, but I did it for practice
//StatisticsApp.propTypes = {};

export default StatisticsApp;