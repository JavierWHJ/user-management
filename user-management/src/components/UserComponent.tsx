import React from 'react';
import { Users } from '../type';

interface Props {
    user: Users | undefined
}

const UserComponent = (props: Props) => {
    return (
        <div>
            {props.user?.firstName}
        </div>
    );
}

export default UserComponent;
