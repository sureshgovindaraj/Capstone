import React, { useState } from 'react';
import EventAction from './EventAction';

const EventDetails = React.memo(Props =>{
    const [eventData, setEventData] = useState(
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
          })
    return(
        <React.Fragment>
            <EventAction />
            <div className = "my-md-3 px-md-0 bd-content border">
                <div className="bg-primary text-left px-md-3 py-md-2 text-white">
                    <span>Event & Benificiary Details</span>
                </div>
                <div className="row mx-md-2 my-md-3">
                    <div className = "col px-0 pr-2">
                        <div className="bg-primary text-left px-md-3 py-md-2 text-white rounded top">
                            <div className = "row text-center">
                                <div className="col">
                                    <span>ID : {eventData.id}</span>
                                </div>
                                <div className="col">
                                    <span className = "text-right">Date : {eventData.date}</span>  
                                </div>
                            </div>
                        </div>
                        <div className="font-weight-bold py-md-3">
                            {eventData.name}
                        </div>
                        <div className="pb-md-3">
                            <small>{eventData.description}</small>
                        </div>
                        <div className="bg-light text-left px-md-3 py-md-2 text-black rounded-bottom">
                            <div className = "row text-center">
                                <div className="col">
                                    <span>Status : <span className="bg-success text-white p-1 rounded">{eventData.status}</span></span>
                                </div>
                                <div className="col">
                                    <span>Category : {eventData.category}</span>  
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className = "col px-0 pl-2">
                        <div className="bg-primary text-left px-md-3 py-md-2 text-white rounded-top">
                            <div className = "row text-center">
                                <div className="col">
                                    <span>Location : {eventData.baseLocation}</span>
                                </div>
                                <div className="col">
                                    <span>Council : {eventData.councilName}</span>   
                                </div>
                            </div> 
                        </div>
                        <div className="font-weight-bold py-md-3">
                            {eventData.beneficiaryName}
                        </div>
                        <div className="pb-md-3">
                            <small>{eventData.venueAddress}</small>
                        </div>
                        <div className="bg-light text-left px-md-3 py-md-2 text-black rounded-bottom">
                            <div className = "row text-center">
                                <div className="col">
                                    <span>Feedback : <span className="bg-warning text-white p-1 rounded">{eventData.rating}</span></span>
                                </div>
                                <div className="col">
                                    <span>Average Rating : {eventData.rating}</span>  
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-md-3">
                <div className = "col">
                    <div className="border rounded">
                        <div className="bg-primary text-left px-md-3 py-md-2 text-white">
                            <span>Participated</span>
                        </div>
                        <div className="border border-success rounded m-md-3">
                            <div className = "mt-1">Rating : 5</div>
                            <hr className = "my-1"/>
                            <div>Likes : nice</div>
                            <hr className = "my-1"/>
                            <div className = "mb-1">DisLikes : Travels</div>
                        </div>
                    </div> 
                </div>
                <div className = "col">
                    <div className="border rounded">
                        <div className="bg-primary text-left px-md-3 py-md-2 text-white">
                            <span>Not Participated</span>
                        </div>
                        <div className="border border-success rounded m-md-3">
                            <div className="my-1">Unexpected offcial works</div>
                        </div>
                    </div>
                </div>
                <div className = "col">
                    <div className="border rounded">
                        <div className="bg-primary text-left px-md-3 py-md-2 text-white">
                            <span>Unregistered</span>
                        </div>
                        <div className="border border-success rounded m-md-3">
                            <div className="my-1">Do not receive future information about event</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-md-3">
                <div className = "col">
                    <div className="border rounded">
                        <div className="bg-primary text-left px-md-3 py-md-2 text-white">
                            <span>Statistics</span>
                        </div>
                        <div className="p-md-3">
                            <table className="table table-sm table-bordered text-left">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <td>Average Rating</td>
                                        <td>Volunteers</td>
                                        <td>Volunteering Hours</td>
                                        <td>Overall Hours</td>
                                        <td>Travel Hours</td>
                                        <td>Lives Impacted</td>
                                    </tr>
                                </thead>
                                <tbody> 
                                    <tr>
                                        <td>{eventData.rating}</td>
                                        <td>{eventData.totalVolunteers}</td>
                                        <td>{eventData.totalVolunteerHours}</td>
                                        <td>24</td>
                                        <td>{eventData.totalTravelHours}</td>
                                        <td>{eventData.livesImpacted}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className = "col">
                    <div className="border rounded">
                        <div className="bg-primary text-left px-md-3 py-md-2 text-white">
                            <span>Poc Details</span>
                        </div>
                        <div className="p-md-3">
                            <table className="table table-sm table-bordered text-left">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <td>#</td>
                                        <td>Employee ID</td>
                                        <td>Name</td>
                                        <td>Contact Number</td>
                                    </tr>
                                </thead>
                                <tbody> 
                                    <tr>
                                        <td>1</td>
                                        <td>{eventData.pocId}</td>
                                        <td>{eventData.pocName}</td>
                                        <td>{eventData.pocContact}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
})

export default EventDetails;