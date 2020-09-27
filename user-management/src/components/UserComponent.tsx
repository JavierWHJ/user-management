import moment from 'moment';
import React from 'react';
import { Button } from 'react-bootstrap';
import { User } from '../type';
import UserProfile from './UserProfile';

interface Props {
    user: User;
    onSelectUserUpdate: (user: User) => void;
    onSelectUserDelete: (user: User) => void;
}

const UserComponent = (props: Props) => {

    const onSelectUpdate = () => {
        props.onSelectUserUpdate(props.user);
    }

    const onSelectDelete = () => {
        props.onSelectUserDelete(props.user);
    }

    return (
        <>
            {props.user ? 
            <>
                <tr key={props.user.id}>
                        <td>
                            <div className="d-flex align-items-center">
                                <UserProfile firstName={props.user.firstName} lastName={props.user.lastName}/>
                                <span className="ml-3">{props.user.firstName + ' ' + props.user.lastName}</span>
                            </div>
                        </td>
                        <td>{props.user.email}</td>
                        <td>{moment(new Date(props.user.dob)).format('DD MMM YYYY')}</td>
                        <td>
                            <div className="d-flex justify-content-center mt-2">
                                <Button variant="success" className="mr-4" block onClick={onSelectUpdate}>Update</Button>
                                <Button variant="danger" className="mt-0" block onClick={onSelectDelete}>Delete</Button>
                            </div>
                        </td>
                </tr>
            </>
            : ''}
        </>
    );
}

export default UserComponent;
