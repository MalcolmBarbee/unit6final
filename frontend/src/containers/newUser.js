import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class Adduser extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            user_id: null,
            user: null,
        }
        
    }
render () {
    return (
        <>
        <h1>Yote!!!!!!!</h1>
        <h1>Add a User</h1>
        </>
    )
}

}
export default Adduser;