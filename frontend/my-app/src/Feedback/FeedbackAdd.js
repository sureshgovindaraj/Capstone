import React from 'react';

const FeedbackAdd = React.memo(props => {

    return (
        <React.Fragment>
                <div className = "my-md-3 px-md-0 bd-content border">
                    <nav className="navbar navbar-dark bg-primary mb-md-3">
                        <a className="navbar-brand" href="#">Add Questions</a>
                    </nav>
                    <div className="row flex-xl-nowrap">
                        <div className ="col-md-4 col-xl-3 bd-sidebar">
                            <div className="clearfix pl-md-3">
                                <div className="text-left mb-md-3">
                                    <span>Feedback Type</span>
                                </div>
                                <div className="custom-control custom-checkbox float-left mr-md-3">
                                    <input type="checkbox" name="customCheckbox" className="custom-control-input" id="customCheckbox1" />
                                    <label className="custom-control-label" for="customCheckDisabled1">Allow Multiple Answer</label>
                                </div>
                                <div className="custom-control custom-checkbox float-left mr-md-3">
                                    <input type="checkbox" name="customCheckbox" className="custom-control-input" id="customCheckbox2" />
                                    <label className="custom-control-label" for="customCheckbox2">Free Text Answer</label>
                                </div>
                                <div className="custom-control custom-checkbox float-left mr-md-3">
                                    <input type="checkbox" name="customCheckbox" className="custom-control-input" id="customCheckbox3" />
                                    <label className="custom-control-label" for="customCheckbox3">Custom Question</label>
                                </div>
                            </div>
                        </div>
                        <div className = "col-md-6 col-xl-7">
                            <div className="float-left">
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                                    <label className="custom-control-label" for="customRadioInline1">Participated</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                                    <label className="custom-control-label" for="customRadioInline2">Not Participated</label>
                                </div>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline3" name="customRadioInline1" className="custom-control-input" />
                                    <label className="custom-control-label" for="customRadioInline3">Unregistered</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table className="table table-borderless text-left">
                        <thead>
                            <tr>
                                <th scope="col col-xl-3">Question</th>
                                <th scope="col col-xl-6"><input type="text" className="form-control" id="questionDesc"/></th>
                                <th scope="col col-xl-1"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Answer1</th>
                                <td><input type="text" className="form-control" id="questionDesc"/></td>
                                <td><button type="button" className="btn btn-warning btn-sm">Delete Answer</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="row flex-xl-nowrap">
                        <div className ="col-md-4 col-xl-3 bd-sidebar">
                            <div className="clearfix pl-md-3">
                                <button type="button" className="btn btn-success btn-sm float-left">Add Answer</button>
                            </div>
                        </div>
                    </div>
                    <div className="row flex-xl-nowrap mt-md-3">
                        <div className ="col-md-4 col-xl-3 bd-sidebar">   
                        </div>
                        <div className = "col-md-6 col-xl-7 align-self-end">
                            <div className="clearfix">
                                <button type="button" className="btn btn-primary btn-sm float-left mr-md-3">Save</button>
                                <button type="button" className="btn btn-secondary btn-sm float-left mr-md-3">Cancel</button>
                                <button type="button" className="btn btn-danger btn-sm float-left mr-md-3">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
})

export default FeedbackAdd;