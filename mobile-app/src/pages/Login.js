import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import SocialButton from '../components/SocialButton';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login:', { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <div className="status-bar">
          <span className="time">16:04</span>
          <div className="status-icons">
            <span>📶</span>
            <span>📱</span>
            <span>🔋</span>
          </div>
        </div>
        <h1 className="welcome-title">Welcome</h1>
      </div>

      <div className="login-card">
        <form onSubmit={handleLogin}>
          <Input
            label="Username Or Email"
            type="email"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            showPasswordToggle={true}
            onTogglePassword={() => setShowPassword(!showPassword)}
          />

          <Button type="submit" variant="primary" fullWidth>
            Log In
          </Button>

          <Link to="/forgot-password" className="forgot-password">
            Forgot Password?
          </Link>

          <Button
            type="button"
            variant="secondary"
            fullWidth
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </Button>

          <div className="divider">
            <span>or sign up with</span>
          </div>

          <div className="social-buttons">
            <SocialButton icon="facebook" onClick={() => console.log('Facebook login')} />
            <SocialButton icon="google" onClick={() => console.log('Google login')} />
          </div>

          <div className="signup-prompt">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;