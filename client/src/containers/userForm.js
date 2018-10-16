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

    
}