import React, { Component } from 'react'
import Events from './Events';
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export class AllEvents extends Component {

    static defaultProps = {
        category: ""
    }
    static propTypes = {
        category: PropTypes.string,
    }
    constructor(props) {
        super(props);
        // console.log("Testing Constructor")
        this.state = {
            articles: [],
            loading: false,
        }
        // For showing the title as with the property
        document.title = `${this.props.category}-Newsapp`;
    }

    // Now fetching data form API using compountDidMount
    async componentDidMount() {
        // this will run at the last after the render runs
        // console.log("Testing")
        this.props.setProgress(10);
        let url = `https://allevents.s3.amazonaws.com/tests/${this.props.category}.json`;
        this.setState({ loading: true });
        const data = await fetch(url);
        this.props.setProgress(50);
        let parseData = await data.json();
        let newData = parseData.item;
        // console.log(newData);
        this.setState({ articles: newData });
        this.props.setProgress(100);
        this.setState({ loading: false });

    }
    render() {
        return (
            // GridView
            <div>
                <div className="container my-3">
                    <h3 className="text-center" style={{ margin: "35px 0px" }}>{document.title = `Discover Best Of Online Events [${this.props.category}]`}</h3>
                    {/* When loading will true it shows sppinner */}
                    {this.state.loading && <Spinner />}

                    {/* {this.state.articles.map((element) => console.log(element))} */}

                    {/* under the className row all the elements are aligned one by one */}
                    <div className="row my-4">
                    {/* <div className="list-group"> */}
                        {/* when iterating the results from API it needs to give unique key */}
                        {this.state.articles.map((element) => {
                            return <div className="col-md-3" key={element.event_id}>
                                <Events imageUrl={element.thumb_url_large} title={element.eventname} eventUrl={element.event_url} date={element.start_time_display} city={element.venue.city} />
                            </div>
                        })}
                    </div>
                </div> 

            </div>

            // ListView
    //         <div>
    //             { this.state.articles.map((element) =>{
    //             return <div className="media m-3 p-2" style={{border:"1px solid black"}}>
    //                 <img className="mr-3 " src={element.thumb_url}style={{height:"50px", width:"50px"}} alt="Generic placeholder image"/>
    //                     <div className="media-body">
    //                         <h5 className="mt-0">{element.eventname}</h5>
    //                        <p>{element.venue.street}</p>
    //                        <p className="card-text"><small className="text-muted">on {element.start_time_display} </small></p>
    //                        <a href={element.eventUrl} target="_blank" className="btn btn-sm btn-warning">View Details</a>
    //                     </div>
    //             </div>
    // })}
    //         </div>
                 
        )

    }
}

export default AllEvents
