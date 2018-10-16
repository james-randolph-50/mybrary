import React from 'react';
import { connect } from 'react-redux';

const Users = ({ users }) => {
    const renderInfo = users.map(user =>
        <p key={user.id}>{user.name}</p>
        )

        return (
            <div>
                {renderInfo}
            </div>
        )
}

export default Users;