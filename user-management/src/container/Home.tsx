import React, {useState, useEffect} from 'react';
import userService from "../services/userService";
import { User } from '../type';
import UserContainer from './UserContainer';

const Home = () => {
    const [users, setUsers] = useState<User[]>();

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        userService.fetchUsers().then((users) => {
            setUsers(users)
        })
    }

    const addUser = (newUser: User) => {
        userService.addUser(newUser).then((users) => {
            getUsers();
        })
    }

    const updateUser = (id: number, userToUpdate: User) => {
        userService.updateUser(id, userToUpdate).then((users) => {
            getUsers();
        })
    }

    const deleteUser = (id: number) => {
        userService.deleteUser(id).then((users) => {
            getUsers();
        })
    }

    return (
        <div>
            <UserContainer users={users}/>
        </div>
    );
}

export default Home;
