import React from 'react';
import PropTypes from 'prop-types';
import squirrel from './squirrel.jpg';
import star from './star.png'
import './AppointmentItem.css';

function AppointmentItem(props) {
  var progress_percent = props.points / props.totalpoints * 100
  return (
    <div id="appointmentitem-container">
      <div id="appointmentitem-top-container">
          <img id="appointmentimage" src={props.imageurl} alt="react-boilerplate - Logo"/>
          <div id="appointmentitem-store-info">
              <p class="appointment-title">{props.title}</p>
              <p class="appointment-info">{props.address}</p>
              <p class="appointment-info">{props.phone}</p>
              <p class="get-directions">Get directions</p>
          </div>
      </div>
      <div id="appointmentitem-bottom-container">
        <div id="appointmentitem-bottom-left-container">
          <p class="appointment-time">{props.day} {props.date} at {props.time}</p>
          <p class="appointment-activity">{props.activity}</p>
        </div>
        <div onClick={() => props.AppointmentModal(props.title, props.imageurl, props.date, props.time, props.address, props.phone)} class="get-directions">View details</div>
      </div>
    </div>
  );
}

AppointmentItem.propTypes = {
  item: PropTypes.any,
};

export default AppointmentItem;
