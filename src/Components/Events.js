import React, { Component } from 'react';
import '../App.css';

export class Events extends Component {

   
    render() {
        let{title,imageUrl,eventUrl,city,date}=this.props; //Props in class used like destructring as we seen in js
        return (
            <div>
                <div className="card" style={{marginBottom:"1rem" }}>
                    <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}}>
                    <span className="badge rounded-pill bg-danger"></span>
                    </div>
                <img src={imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text" style={{marginBottom:"0rem"}}>{city}</p>
                    <p className="card-text"><small className="text-muted">on {date} </small></p>
                    <a href={eventUrl} target="_blank" className="btn btn-sm btn-warning">View Details</a>
                </div>
                </div>
            </div>
        )
    }
}

export default Events
