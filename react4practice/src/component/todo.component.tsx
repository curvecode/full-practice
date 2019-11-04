import React, { Component } from 'react';
// import './../App.css'

class TodoComp extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <p> 
                        <i className="fa fa-bars"></i>
                        <i className="fa fa-calendar ml-4" aria-hidden="true"></i> 
                        <i className="fa fa-star ml-4 ico-spin" aria-hidden="true"></i> 
                        <span className="float-right"> 
                            <span className="mr-4 navTask"><u>Task</u></span> 
                            <span className="mr-4"><u>Archive</u></span> 
                            <i className="fa fa-search" aria-hidden="true"></i> 
                        </span> 
                    </p>
                </div>
                <div className="card-body">
                    {/* <p className="float-right headingright">Today</p> */}
                    <h2 className="heading1"> 
                        <span className="today">Today</span> 
                        <span className="float-right headingright">
                            7h 15min
                            <i className="fa fa-bars"></i>
                        </span> 
                    </h2>
                    <p> 
                        <i className="fa fa-calendar mr-2" aria-hidden="true"></i> 
                        <span className="task mt-4">Take kids to school</span> 
                        <span className="badge badge-primary ml-2">8:00-8:30AM</span> 
                        {/* <input className="float-right" type="checkbox" value="" name=""></input> */}
                        <span className="float-right">30min</span>
                    </p>
                    <p>
                        <i className="fa fa-circle-thin mr-2"></i> 
                        <span className="task">Process email</span> 
                        <i className="fa fa-thumb-tack ml-2" aria-hidden="true"></i> 
                        <span className="badge badge-primary ml-2">8:00-9:30AM</span>
                        {/* <input className="float-right" type="checkbox" value="" name=""></input> */}
                        <span className="float-right hidden">1h</span> 
                    </p>
                </div>
            </div>
        );
    }
}

export default TodoComp;
