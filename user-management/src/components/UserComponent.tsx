import moment from 'moment';
import React from 'react';
import { Button } from 'react-bootstrap';
import { User } from '../type';

interface Props {
    user: User | undefined
}

const UserComponent = (props: Props) => {

    return (
        <>
            {props.user ? 
            <tr key={props.user.id}>
                    <td><img src="/user-default.png" className="mr-3"/>{props.user.firstName + ' ' + props.user.lastName}</td>
                    <td>{props.user.email}</td>
                    <td>{moment(new Date(props.user.dob)).format('DD MMM YYYY')}</td>
                    <td className="d-flex justify-content-center">
                        <Button variant="success" className="mr-4" block>Update</Button>
                        <Button variant="danger" className="mt-0" block>Delete</Button>
                    </td>
            </tr> : ''}
        </>
    );
}

export default UserComponent;
