const UserService = {
    fetchUsers() {
        return fetch('/api/users').then(response => response.json())
    },

    createUser(user) {
        const request = {
            method: 'POST',
            body: JSON.stringify({
                
            })
        }
    }
}

export default UserService;