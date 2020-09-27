import React, {useState, useEffect} from 'react';
import userService from "../services/userService";
import { User, UserData } from '../type';
import UserContainer from './UserContainer';

const Home = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        userService.fetchUsers().then((users) => {
            setUsers(users)
        })
    }

    const addUser = (newUser: UserData) => {
        userService.addUser(newUser).then((users) => {
            getUsers();
        })
    }

    const updateUser = (id: number, userToUpdate: UserData) => {
        userService.updateUser(id, userToUpdate).then((users) => {
            getUsers();
        })
    }

    const deleteUser = (id: number) => {
        userService.deleteUser(id).then((users) => {
            getUsers();
        })
    }

    const searchUser = (query: string) => {
        // this func filter users based on search query
        if(query == ''){
            getUsers();
        }
        const filteredUsers = users.filter(
            user =>
                user.firstName
                    .toLowerCase()
                    .indexOf(query.toLowerCase()) !== -1
        );
        setUsers(filteredUsers)
    };

    return (
        <div>
            <UserContainer users={users} searchUser={searchUser} addUser={addUser} updateUser={updateUser} deleteUser={deleteUser}/>
        </div>
    );
}

export default Home;
