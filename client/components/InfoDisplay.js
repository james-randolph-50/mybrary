import React from 'react';
import { connect } from 'react-redux';

const User = ({ user }) => {
    return (
        <div>
            {user ?
            <div>
                <h3>{user.name}</h3>
                <p>Books Read: {user.books_read}</p>
        </div>
        :
        <div>
            ...loading
        </div>
    }
    </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find(user => user.id == ownProps.match.params.userId)
    }
}

export default connect(mapStateToProps)(User);