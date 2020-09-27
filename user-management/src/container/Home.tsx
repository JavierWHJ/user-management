import React, {useState, useEffect} from 'react';
import userService from "../services/userService";
import { Users } from '../type';
import UserContainer from './UserContainer';

const Home = () => {
    const [users, setUsers] = useState<Users[]>();

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        userService.fetchUsers().then((users) => {
            setUsers(users)
        })
    }

    return (
        <div>
            <UserContainer users={users}/>
        </div>
    );
}

export default Home;
