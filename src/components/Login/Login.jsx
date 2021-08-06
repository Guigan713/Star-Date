import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {

    return (
        <div className ="login">
            <div className = "logo"></div>
            <h1>StarDate</h1>
            <div className ="loginImg"></div>
            <input className ="loginName" placeholder="username"></input>
            <input className ="loginPassword" placeholder="password" type="password"></input>

        </div>
    );
}

export default Login;
