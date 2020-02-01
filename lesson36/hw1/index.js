let fetchUser = userName => fetch(`https://api.github.com/users/${userName}`)
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error('Error')
        }
    })

export let getUsersBlogs = async arrOfUsers => {
    let arrOfUsersData = arrOfUsers.map(x => fetchUser(x))
    let allUsers = await Promise.all(arrOfUsersData)
    return allUsers.map(({ blog }) => blog);
}

getUsersBlogs(['google', 'facebook', 'gaearon'])
    .then(linksList => console.log(linksList));