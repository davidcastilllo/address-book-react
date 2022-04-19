import React from "react";
import '../comps/UserCard.css'

let UserCard = (props) => {

  let toggleInfo = (id, e) => {
    let infoCard = document.getElementById(id)
    if (infoCard.style.visibility == 'hidden') {
      infoCard.style.visibility = 'visible'
    }
    else {infoCard.style.visibility = 'hidden'}

    if (e.innerText == 'Show Details') {
      e.innerText = 'Hide Details'
    }
    else {e.innerText = 'Show Details'}
  }

  return (
    <li key={props.key}>
      <div id="user">
        <section id='card'>
          <div id="name">{props.user.name.first} {props.user.name.last}</div>
          <img src={props.user.picture.medium} id="img"></img>
          <button id="btn" onClick={(e) => {toggleInfo(props.id, e.target)}}>Show Details</button>
        </section>
        <section id={props.id} className="info">
          <div> <b>Cell:</b> <br></br>{props.user.cell} </div>
          <div> <b>Email:</b> <br></br>{props.user.email}</div>
          <div> <b>Address:</b> <br></br> 
          {props.user.location.street.number} 
          {props.user.location.street.name} 
          {props.user.location.country} 
          {props.user.location.state} 
          {props.user.location.postcode}
          </div>
        </section>
      </div>

    </li>
  )
}

export default UserCard