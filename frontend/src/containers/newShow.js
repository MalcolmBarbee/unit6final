import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class Addshows extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            user_id: null,
            user: null,
            genre_id: null,
            genre: null,
            title: null,
            img_url: null,
        }
    }
render () {
    return (
        <>
        <h1>Yote!!!!!!!</h1>
        <h1>Add a Show</h1>
        </>
    )
}

}
export default Addshows;