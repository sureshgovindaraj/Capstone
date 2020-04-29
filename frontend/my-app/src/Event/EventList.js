import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../Utils/Loading';

const EventList = React.memo(Props => {
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
    const [showLoading, setShowLoading] =  useState(true);
    useEffect( () => {
        axios.get('capstone/api/event/getAll')
        .then((result) => {
            console.log(result);
            setShowLoading(false);
            setEventList(result.data);
        }).catch((error) => {
            console.error(error)
            setShowLoading(false);
        });
    });
    return(
        <React.Fragment>
            {
            showLoading ? <Loading /> : 
            <main className = "my-md-3 bd-content border" role="main">

                <nav className="navbar navbar-dark bg-primary mb-md-3">
                    <a className="navbar-brand" href="#">EVENT</a>
                </nav>
                <div className="pb-md-1 px-md-3 clearfix">
                    <button type="button" className="btn btn-primary btn-sm float-right">DOWNLOAD EXCEL</button>
                </div>
                <div className="px-md-3">
                    <table className="table table-sm table-bordered text-left">
                        <thead>
                            <tr>
                                <th scope="col">Action</th>
                                <th scope="col">Event ID</th>
                                <th scope="col">Month</th>
                                <th scope="col">Base Location</th>
                                <th scope="col">Council Name</th>
                                <th scope="col">Beneficary Name</th>
                            </tr>
                        </thead>
                        {
                            console.log(eventList)
                        }
                        <tbody> 
                            {
                                eventList.map((event, index) => (
                                    <React.Fragment>
                                        <tr>
                                            <td>
                                                <a className="btn btn-primary btn-sm" href="/event/index" role="button">View</a>
                                            </td>
                                            <td>{event.id}</td>
                                            <td>{event.month}</td>
                                            <td>{event.baseLocation}</td>
                                            <td>{event.councilName}</td>
                                            <td>{event.beneficiaryName}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan="6">
                                                <table className="table table-bordered">
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">Event Name</th>
                                                            <td>{event.name}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Event Date</th>
                                                            <td>{event.date}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Business Unit</th>
                                                            <td>{event.businessUnit}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Status</th>
                                                            <td>{event.status}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Venue Address</th>
                                                            <td>{event.venueAddress}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Total Volunteers</th>
                                                            <td>{event.totalVolunteers}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Total Volunteers Hours</th>
                                                            <td>{event.totalVolunteerHours}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">Total Travel Hours</th>
                                                            <td>{event.totalTravelHours}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </React.Fragment>
                                ))
                            }
                        </tbody>
                    </table>
                </div> 
            </main>
            }
        </React.Fragment>
    )
})

export default EventList;

