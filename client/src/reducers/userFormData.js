const initialState = {
    name: '',
    books_read: 0
}

export default (state = initialState, action) => {

    switch(action.type) {
        case 'UPDATED_DATA':
            return action.userFormData
    }
}