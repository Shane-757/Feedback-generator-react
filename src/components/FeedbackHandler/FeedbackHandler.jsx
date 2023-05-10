import React, { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

const FeedbackHandler = ({ onLeaveFeedback }) => {
  const [h1Color, setH1Color] = useState('black');

  const handleLeaveFeedback = (feedbackType) => {
    onLeaveFeedback(feedbackType);

    if (feedbackType === 'good') {
      setH1Color('green');
    } else if (feedbackType === 'bad') {
      setH1Color('red');
    } else if (feedbackType === 'neutral') {
      setH1Color('black');
    }
  };

  return (
    <>
      <h1 style={{ color: h1Color }}>Please Leave Feedback</h1>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleLeaveFeedback}
      />
    </>
  );
};

export default FeedbackHandler;