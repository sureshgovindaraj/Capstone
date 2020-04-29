import React from 'react';
import EventAction from './EventAction';
import EventList from './EventList';

const Event = React.memo(Props => {
    return(
        <React.Fragment>
            <EventAction />
            <EventList />
        </React.Fragment>
    )
})

export default Event;