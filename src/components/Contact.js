import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

const Contact = (props) => (
    <div className="Contact">
        <img className="avatar" src={props.avatar} alt={props.name} />
        <div>
            <h4 className="name">{props.name}</h4>
            <div className="status">
                <div className={props.online ? "status-online" : "status-offline"} />
                <p className="status-text">{props.online ? "Online" : "Offline"}</p>
            </div>
        </div>
    </div>
)

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool
};

export default Contact;