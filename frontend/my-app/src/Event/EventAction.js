import React from 'react';

const EventAction = React.memo(Props => {
    return(
        <React.Fragment>
            <div className="row my-md-3"> 
                <div className="col-md">
                    <div className = "text-dark bg-primary opacity-5">
                        <div className="text-left px-md-3 pt-md-3 font-weight-bold py-md-1">
                            <h4>Email Reminder!</h4>
                        </div>
                        <div className="text-left px-md-3 small py-md-1">
                            <span>Sit back and relax while the app send emails!</span>
                            <button type="button" className="btn bg-white ml-md-2 btn-sm text-dark">Send Email</button>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className = "text-dark bg-warning opacity-5">
                        <div className="text-right px-md-3 pt-md-3 font-weight-bold py-md-1">
                            <h4>Future Implementations!</h4>
                        </div>
                        <div className="text-right px-md-3 small py-md-1">
                            <button type="button" className="btn bg-white ml-md-2 btn-sm text-dark invisible">Send Email</button>
                            <span>The place holder can be used for adding any other actions in future.</span>
                        </div>
                    </div>
                </div> 
            </div>
        </React.Fragment>
    )
})

export default EventAction;