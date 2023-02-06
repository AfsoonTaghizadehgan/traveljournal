import '../App.css';

//this section includes an image of a location and all the information of a trip
export default function Trips(props){
    return(
    <div className="container">
        <div className="trip--img">
            <img src={require(`../images/${props.items.img}`)} alt="" />
        </div>
        <div className="trip--info">
            <a className="trip--cntry" href={props.items.country}>View on Google Maps</a>
            <h2 className="trip--location">{props.items.location}</h2>
            <p className="trip--date"> {props.items.date}</p>
            <p className="trip--desc">{props.items.desc}</p>
        </div>
    </div>
    )
}