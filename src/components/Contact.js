import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: props.online
        };
    }
    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.avatar} alt={this.props.name} />
                <div>
                    <h4 className="name">{this.props.name}</h4>
                    <div className="status"
                        onClick={event => {
                            const newStatus = !this.state.online;
                            this.setState({ online: newStatus })
                        }}>
                        <div className={this.state.online ? "status-online" : "status-offline"} />
                        <p className="status-text">{this.state.online ? "Online" : "Offline"}</p>
                    </div>
                </div>
            </div>
        )
    }
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool
};

export default Contact;