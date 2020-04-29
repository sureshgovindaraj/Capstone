import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../Utils/Loading';

const FeedbackList = React.memo(props => {

    const [feedbackList, setFeedbackList] = useState([
        {
            "question" : "How do you like the event",
            "answer" : "10",
            "type": "participated"
        },
        {
            "question" : "Hey there, Please share your feedback",
            "answer" : "7",
            "type": "unregistered"
        },
        {
            "question" : "Hey there, you had registered for the event",
            "answer" : "5",
            "type": "nonparticipated"
        }
    ]);
    const [showLoading, setShowLoading] =  useState(true);

    useEffect( () => {
        axios.get('/api/feedback/getAll')
        .then((result) => {
            console.log(result);
            setShowLoading(false);
            setFeedbackList(result.data);
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
                        <a className="navbar-brand" href="#">Navbar</a>
                    </nav>
                    <div className="pb-md-1 px-md-3 clearfix">
                        <button type="button" className="btn btn-success btn-sm float-right">ADD QUESTION</button>
                    </div>
                    <div className="px-md-3">
                        <table className="table table-sm table-bordered text-left">
                            <thead>
                                <tr>
                                <th scope="col">Question</th>
                                <th scope="col">Total Answers</th>
                                <th scope="col">Feedback Type</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            {
                                console.log(feedbackList)
                            }
                            <tbody> 
                                {
                                    feedbackList.map((feedback, index) => (
                                        <tr>
                                            <th scope="row">{feedback.question}</th>
                                            <td>{feedback.answer}</td>
                                            <td>{feedback.type}</td>
                                            <td>
                                                <button type="button" className="btn btn-primary btn-sm">Edit</button>
                                            </td>
                                        </tr>
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

export default FeedbackList;