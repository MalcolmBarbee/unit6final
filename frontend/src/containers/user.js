import React from 'react';
import axios from 'axios';
import {Switch, HashRouter, Route} from 'react-router-dom';

// stateful

class User extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            id: null,
            username: null,
            shows: [],
        }
    }

    render () {
    return(
        <h1>This is the individual user page!</h1>
    )

    }
}

export default User;