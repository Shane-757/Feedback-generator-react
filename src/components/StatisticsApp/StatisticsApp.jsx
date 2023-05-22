import React, { useState } from 'react';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/SectionTitle/SectionTitle';
import Notification from 'components/Notifications/Notifications';
import FeedbackHandler from 'components/FeedbackHandler/FeedbackHandler';


const StatisticsApp = (props) => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleLeaveFeedback = (feedbackType) => {
    setState((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const totalFeedback = state.good + state.neutral + state.bad;
  const positivePercentage = totalFeedback > 0 ? (state.good / totalFeedback) * 100 : 0;

  const hasFeedback = totalFeedback > 0;

  return (
    <div>
      <Section title="Feedback Options">
        <FeedbackHandler onLeaveFeedback={handleLeaveFeedback} />
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


export default StatisticsApp;