import '../App.css';
import React from 'react';

function Clinics(props) {
  return <div className="clinics-container"> 
    {props.clinics.map((clinic) => {

        return <div className="clinics-box" key={clinic[0].id}>
            <span className="icon-card"></span>
            <h2 className="color-title">{clinic[0].nome}</h2>
            <p className="text-adjust">{clinic[1].street},{clinic[1].neighborhood}</p>
            <p className="latlng-adjust">{clinic[1].latitude}, {clinic[1].longitude}</p>
            </div>
    })}
  </div>;
}

export default Clinics
