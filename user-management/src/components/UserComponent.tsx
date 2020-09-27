import moment from 'moment';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Users } from '../type';

interface Props {
    user: Users | undefined
}

const UserComponent = (props: Props) => {

    return (
        <>
            {props.user ? 
            <tr key={props.user.id}>
                    <td>{props.user.firstName + ' ' + props.user.lastName}</td>
                    <td>{props.user.email}</td>
                    <td>{moment(new Date(props.user.dob)).format('DD MMM YYYY')}</td>
                    <td className="d-flex justify-content-around">
                        <Button variant="success">Update</Button>
                        <Button variant="danger">Delete</Button>
                    </td>
            </tr> : ''}
        </>
    );
}

export default UserComponent;
