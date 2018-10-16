import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateUserFormData } from '../actions/userForm';
import { createUser } from '../actions/users';

class UserForm extends Component {

    handleOnChange = event => {
        const { name, value } = event.target;
        const currentUserFormData = Object.assign({}, this.props.userFormData, {
            [name]: value
        })
        this.props.updateUserFormData(currentUserFormData)
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.createUser(this.props.UserFormData)
    }

    render() {
        const { name, books_read } = this.props.UserFormData;

        return (
            <div>
                Add User
                <form onSubmit={this.handleOnSubmit}>
                <div>
                    <label htmlFor="name"> Name: </label>
                        <input
                        type="text"
                        onChange={this.handleOnChange}
                        name="name"
                        value={name}
                    />
                </div>
                <div>
                    <label htmlFor="books_read"> Books Read: </label>
                    <input
                        type="number"
                        onChange={this.handleOnChange}
                        name="books_read"
                        value={books_read}
                    />
                </div>

                <button type="submit">Add User</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        UserFormData: state.UserFormData
    }
}

export default connect(mapStateToProps, {
    updateUserFormData,
    createUser
})(UserForm);