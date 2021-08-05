import './Login.css';

const Login = () => {
    return (
        <div className ="login">
            <h1>Login</h1>
            <div className ="loginImg"></div>
            <label>Login</label>
            <input className ="loginName"></input>
            <label>Password</label>
            <input className ="loginPassword"></input>
            <button>Log In</button>
        </div>
    );
}

export default Login;
