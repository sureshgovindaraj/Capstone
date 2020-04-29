import React, { useState } from 'react';
import FeedbackList from './FeedbackList';
import FeedbackAdd from './FeedbackAdd';

const Feedback = React.memo(props => {
    const [feedbackAdd, setFeedbackAdd] = useState(true);

    return (
        <React.Fragment>
            { feedbackAdd ? <FeedbackAdd /> : <FeedbackList /> }
        </React.Fragment>
    )
})

export default Feedback;