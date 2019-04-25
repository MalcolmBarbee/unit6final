import React from 'react';
import Axios from 'axios';
import {Switch, Link, HashRouter, Route} from 'react-router-dom';


class Shows extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            shows: {}
        }
    }
componentDidMount() {
    Axios.get(`http://localhost:5000/shows`)
    .then((data) => {
        data = data.data.data;
        
        }
    )}




render() {
    return(
        <h1>{this.showList}</h1>
    )

    }  
}

export default Shows;

//http://localhost:5000/users
//http://localhost:5000/users/3
//http://localhost:5000/shows/genre/3
//http://localhost:5000/postcomments
//http://localhost:5000/shows
//
