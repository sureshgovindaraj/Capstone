import React from 'react';
import EventAction from './EventAction';
import ReportList from './ReportList';

const Report = React.memo(Props => {
    return(
        <React.Fragment>
            <EventAction />
            <ReportList />
        </React.Fragment>
    )
})

export default Report;