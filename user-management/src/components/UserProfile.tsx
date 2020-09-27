import React from 'react';
import './UserProfile.css';

interface Props {
    firstName: string,
    lastName: string
}


const UserProfile = (props: Props) => {
    return (
        <div className="avatar-circle">
            <span className="initials">{(props.firstName[0] + props.lastName[0]).toUpperCase()}</span>
        </div>
    );
}

export default UserProfile;
