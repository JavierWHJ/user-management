import React, {useState, useEffect} from 'react';
import userService from "../services/userService";

const Home = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        userService.fetchUsers().then((users) => {
            console.log(users)
        })
    }, [])

    return (
        <div>
            
        </div>
    );
}

export default Home;
