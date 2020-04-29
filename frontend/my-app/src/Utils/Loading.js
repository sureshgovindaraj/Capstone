import React from 'react';

const Loading = React.memo(Props => {
    return (
        <React.Fragment>
            <div className="position-fixed w-100 h-100 t-50">
                <div className="spinner-border text-secondary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </React.Fragment>
    );
});

export default Loading;