import React from "react"

function Blog(props){
    return (
        <div className="blog-section">
            <div className="img-sectiong">
                <img className="blog-img" src={props.item.imageUrl}/>
            </div>
            <div className="info-section">
                <img src="./images/location-pin.png"/><span className="location">  {props.item.location}  </span>
                <span><a className="google-maps" href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a></span>
                <h1>{props.item.title}</h1>
                <span className="dates">{props.item.date}</span>
                <p className="description">{props.item.description}</p>
            </div>
        </div>
    )
}

export default Blog