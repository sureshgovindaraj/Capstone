import React, { useState } from 'react';

const ReportList = React.memo(Props => {
    const [eventList, setEventList] = useState([
        {
            "id": "EVNT001",
            "month": "DEC",
            "baseLocation": "India",
            "councilName": "Outreach IN",
            "beneficiaryName": "Govt school",
            "name": "save a school swimming pool",
            "date": "12/15/2020",
            "businessUnit": "Healthcare",
            "status": "Approved",
            "venueAddress": "Coimbatore",
            "totalVolunteers": "4",
            "totalVolunteerHours": "20",
            "totalTravelHours": "1",
            "description": "The school is hosting a Festival to raise money to refurbish their swimming pool that is used by childrens.",
            "category": "Other Community Programs",
            "livesImpacted": "0",
            "rating": "0",
            "pocId": "698968",
            "pocName": "poc name",
            "pocContact": "4454445444",
            "project": "Community Program"
          },
          {
            "id": "EVNT002",
            "month": "JAN",
            "baseLocation": "UK",
            "councilName": "Outreach UK",
            "beneficiaryName": "St.Joseph school",
            "name": "save a school play area",
            "date": "01/15/2020",
            "businessUnit": "Healthcare",
            "status": "Approved",
            "venueAddress": "Los Angels",
            "totalVolunteers": "5",
            "totalVolunteerHours": "24",
            "totalTravelHours": "3",
            "description": "The school is hosting a Festival to raise money to refurbish their play area that is used by childrens.",
            "category": "Other Community Programs",
            "livesImpacted": "0",
            "rating": "0",
            "pocId": "787678",
            "pocName": "poc name",
            "pocContact": "7787768908",
            "project": "Community Program"
          }
    ]);
    return(
        <React.Fragment>
            {
            //showLoading ? <Loading /> : <Feedback>
            }
            <main className = "my-md-3 bd-content border" role="main">

                <nav className="navbar navbar-dark bg-primary mb-md-3">
                    <a className="navbar-brand" href="#">EVENT REPORT</a>
                </nav>
                <div className="pb-md-1 px-md-3 clearfix">
                    <button type="button" className="btn btn-primary btn-sm float-right">DOWNLOAD EXCEL</button>
                </div>
                <div className="px-md-3">
                    <table className="table table-sm table-bordered text-left">
                        <thead>
                            <tr>
                                <th scope="col">Event ID</th>
                                <th scope="col">Beneficary Name</th>
                                <th scope="col">Base Location</th>
                                <th scope="col">Council Name</th>
                                <th scope="col">Project</th>
                                <th scope="col">Business Unit</th>
                                <th scope="col">Status</th>
                                <th scope="col">Total Volunteers</th>
                                <th scope="col">Total Volunteers Hours</th>
                                <th scope="col">Total Travel Hours</th>
                            </tr>
                        </thead>
                        {
                            console.log(eventList)
                        }
                        <tbody> 
                            {
                                eventList.map((event, index) => (
                                    <tr>
                                        <th scope="row">{event.id}</th>
                                        <td>{event.beneficiaryName}</td>
                                        <td>{event.baseLocation}</td>
                                        <td>{event.councilName}</td>
                                        <td>{event.project}</td>
                                        <td>{event.businessUnit}</td>
                                        <td>{event.status}</td>
                                        <td>{event.totalVolunteers}</td>
                                        <td>{event.totalVolunteerHours}</td>
                                        <td>{event.totalTravelHours}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div> 
            </main>
        </React.Fragment>
    )
})

export default ReportList;

