import moment from 'moment';
import React from 'react';
import { Button } from 'react-bootstrap';
import { User } from '../type';
import UserProfile from './UserProfile';

interface Props {
    user: User | undefined
}

const UserComponent = (props: Props) => {

    return (
        <>
            {props.user ? 
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
                            <Button variant="success" className="mr-4" block>Update</Button>
                            <Button variant="danger" className="mt-0" block>Delete</Button>
                        </div>
                    </td>
            </tr> : ''}
        </>
    );
}

export default UserComponent;
