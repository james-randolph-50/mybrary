import React, { Component } from 'react';

class InfoEntry extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: ''
            books_read: ''
        }
    }

    handleOnChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        const user = this.state;
        this.props.addUser(user)
        this.setState({
            name: '',
            books_read: ''
        })
    }

    
}