const fetchUsers = () => {
    return fetch("http://localhost:3030/users")
    .then(res => res.json())
    .then(result => {
        return result
    })
    .catch(console.log);
}

const addUser = (user) => {
    const userToAdd = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        dob: new Date(user.dob).getTime()
    }
    return fetch("http://localhost:3030/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userToAdd)
    }).then(res => {
        return res
    });
}

const updateUser = (id, user) => {
    const userToUpdate = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        dob: new Date(user.dob).getTime()
    }
    return fetch("http://localhost:3030/users/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userToUpdate)
        })
        .then(res => res.json())
        .then(result => {
            return result
        });
}

const deleteUser = (id) => {
    return fetch("http://localhost:3030/users/" + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }})
        .then(res => res.json())
        .then(result => {
            return result
        });
}


export default {
    fetchUsers,
    addUser,
    updateUser,
    deleteUser
}