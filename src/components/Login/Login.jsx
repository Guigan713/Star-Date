import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {

const handleClick = () => {
    localStorage.setItem('login', 'yes')
}


    return (
        <div className ="login">
            <h1>StarDate</h1>
            <div className ="loginImg"></div>
            <input className ="loginName" placeholder="username"></input>
            <input className ="loginPassword" placeholder="password" type="password"></input>
            <Link to='/swipe'>
                <button id="buttonLogin" onClick={handleClick}>connexion</button>
            </Link>
        </div>
    );
}

export default Login;
