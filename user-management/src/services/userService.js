const fetchUsers = () => {
    return fetch("http://localhost:3030/users")
    .then(res => res.json())
    .then(result => {
        return result
    })
    .catch(console.log);
}

const addUser = (newUser) => {
    return fetch("http://localhost:3030/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    }).then(res => {
        return res
    });
}

const updateUser = (userToUpdate) => {
    return fetch("http://localhost:3030/users" + id, {
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

const deleteUser = (userToDelete) => {
    return fetch("http://localhost:3030/users" + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userToDelete)
        })
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