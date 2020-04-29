import React, { useState } from 'react';

const Dashboard = React.memo(Props => {
    const [dashboardList, setDashboardList] = useState([
        {
            "field" : "Total Events",
            "total" : "10",
            "color" : "bg-danger"
        },
        {
            "field" : "Lives Impact",
            "total" : "678",
            "color" : "bg-warning"
        },
        {
            "field" : "Total Volunteers",
            "total" : "25",
            "color" : "bg-success"
        },
        {
            "field" : "Total Participants",
            "total" : "10",
            "color" : "bg-secondary"
        }
    ]);
    return(
        <React.Fragment>
            <div className="row my-md-3">
                {
                    dashboardList.map((dashboard, index) => 
                        <div className="col-md">
                            <div className = {dashboard.color + " text-white"}>
                                <div className="text-left px-md-3 small py-md-1 pt-md-3 text-uppercase">
                                    {dashboard.field}
                                </div>
                                <div className="text-left px-md-3 font-weight-bold py-md-1">
                                    <h4>{dashboard.total}</h4>
                                </div>
                                <div className="opacity-5 text-right px-md-3 small py-md-1 bg-dark">
                                    View Detail
                                </div>
                            </div>
                        </div>
                    )
                }    
            </div>
        </React.Fragment>
    );
})

export default Dashboard;