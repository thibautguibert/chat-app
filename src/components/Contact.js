import React from 'react';
import './Contact.css';

const Contact = () => (
    <div className="Contact">
        <img className="avatar" src="https://randomuser.me/api/portraits/men/68.jpg" alt="Profile pic" />
        <div>
            <h4 className="name">Don Rogers</h4>
            <div className="status">
                <div className="status-online" />
                <p className="status-text">Online</p>
            </div>
        </div>
    </div>
)

export default Contact;