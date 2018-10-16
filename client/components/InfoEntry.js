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

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
            <label htmlFor="user_name"> Name </label>
            <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleOnChange}
                placeholder="Username"
            />

            <label htmlFor="books_read">Books Read</label>
            <input
                type="number"
                name="books_read"
                value={this.state.books_read}
                onChange={this.handleOnChange}
                placeholder="Number of Books Read"
            />
                <button>Add User</button>
                </form>
        )
    }

}

export default InfoEntry;