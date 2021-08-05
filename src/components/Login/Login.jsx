import './Login.css';

const Login = () => {
    return (
        <div className ="login">
            <h1>StarDate</h1>
            <div className ="loginImg"></div>
            <input className ="loginName" placeHolder="username"></input>
            <input className ="loginPassword" placeHolder="password" type="password"></input>
            <button id="buttonLogin" >connexion</button>
        </div>
    );
}

export default Login;
