import React from 'react';
import SearchComponent from '../components/SearchComponent';
import UserComponent from '../components/UserComponent';
import { Users } from '../type';

interface Props {
    users: Users[] | undefined
}

const UserContainer = (props: Props) => {
    return (
        <div>
            <SearchComponent/>
            {props.users ? props.users.map((user) => {
                return <UserComponent key={user.id} user={user}/>
            }) : ''}
        </div>
    );
}

export default UserContainer;
