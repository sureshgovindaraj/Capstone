import React from 'react';

const Roles = React.memo(Props =>{
    return(
        <React.Fragment>
            <div className = "my-md-3 px-md-0 bd-content border">
                <nav className="navbar navbar-dark bg-primary mb-md-3">
                    <a className="navbar-brand" href="#">Add Questions</a>
                </nav>
                <table className="table table-borderless text-left">    
                    <tbody>
                        <tr>
                            <th scope="row">Employee ID</th>
                            <td><input type="text" className="form-control" id="questionDesc"/></td>
                            <td>
                                <button type="button" className="btn text-white btn-success btn-sm">Add PMO</button>
                                <button type="button" className="btn text-white ml-md-2 btn-danger btn-sm">Remove PMO</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <main className = "my-md-3 bd-content border" role="main">

                    <nav className="navbar navbar-dark bg-primary mb-md-3">
                        <a className="navbar-brand" href="#">Navbar</a>
                    </nav>
                    <div className="pb-md-1 px-md-3 clearfix">
                        <button type="button" className="btn btn-primary btn-sm float-right">DOWNLOAD EXCEL</button>
                    </div>
                    <div className="px-md-3">
                        <table className="table table-sm table-bordered text-left">
                            <thead>
                                <tr>
                                    <th scope="col">Email</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                </tr>
                            </thead>
                            <tbody> 
                                <tr>
                                    <td>test@gmail.com</td>
                                    <td>Pmo</td>
                                    <td>Test</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>     
                </main>
        </React.Fragment>
    )
})

export default Roles;