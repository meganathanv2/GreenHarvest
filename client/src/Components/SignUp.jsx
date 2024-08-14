import { useState } from 'react';
import './SignUp.css';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Login from './Login';
function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('User');
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response=await axios.post('http://localhost:3000/user/signup',{name,email,password,role})
    navigate('/login')
  
  };

  return (
    <div className="signup-container">
      <form className='form' onSubmit={handleSubmit}>
        <div className="signup-form">
          <div className="signup-logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn0rGjJ48UbmCn2i8a7Y-XQCdVqJA3OVFnbQ&s" alt="Logo" />
            <h2>Sign up your account</h2>
          </div>
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="signup-button">Sign me up</button>
          <p>Already have an account? <a href="/login">Sign in</a></p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
