import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    render () {
        return (
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <a className="navbar-brand" href="#">Time4Shows</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNavDropdown">
//     <ul className="navbar-nav">
//       <li className="nav-item active">
//         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Users</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Shows</a>
//       </li>
//       <li className="nav-item dropdown">
//         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Genre
//         </a>
//         <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//           <a className="dropdown-item" href="#">Action</a>
//           <a className="dropdown-item" href="#">Comedy</a>
//           <a className="dropdown-item" href="#">Adventure</a>
//         </div>
//       </li>
//     </ul>
//   </div>
// </nav>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-brand">Time4Shows</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to='/' className="nav-item nav-link">Home</Link>
                        <Link to='/user' className="nav-item nav-link">Users</Link>
                        <Link to='/show' className="nav-item nav-link">Shows</Link>
                        <Link to='/user/post' className="nav-item nav-link">Sign up!</Link>
                    </div>
                </div>
            </nav>
        )}
}

export default Header;