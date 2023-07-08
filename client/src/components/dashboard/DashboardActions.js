import React from 'react';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DashboardActions = () => {
    return (
        <div className="dash-buttons">
            <Link to="/edit-profile" className="btn btn-light"
            ><FontAwesomeIcon icon={['fas', 'user-circle']} /> Edit Profile</Link>
            <Link to="/add-experience" className="btn btn-light"
            ><FontAwesomeIcon icon={['fab', 'black-tie']} /> Add Experience</Link>
            <Link to="/add-education" className="btn btn-light"
            ><FontAwesomeIcon icon={['fas', 'graduation-cap']} /> Add Education</Link>
        </div>
    );
}

export default DashboardActions;