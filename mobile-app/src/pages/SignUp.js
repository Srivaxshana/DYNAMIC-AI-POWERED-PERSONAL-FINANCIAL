import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import SocialButton from '../components/SocialButton';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your sign up logic here
    console.log('Sign Up:', formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-header">
        <div className="status-bar">
          <span className="time">16:04</span>
          <div className="status-icons">
            <span>📶</span>
            <span>📱</span>
            <span>🔋</span>
          </div>
        </div>
        <h1 className="welcome-title">Create Account</h1>
      </div>

      <div className="signup-card">
        <form onSubmit={handleSignUp}>
          <Input
            label="Full Name"
            type="text"
            placeholder="John Doe"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />

          <Input
            label="Email"
            type="email"
            placeholder="example@example.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            label="Password"
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            name="password"
            value={formData.password}
            onChange={handleChange}
            showPasswordToggle={true}
            onTogglePassword={() => setShowPassword(!showPassword)}
          />

          <Input
            label="Confirm Password"
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="••••••••"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            showPasswordToggle={true}
            onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
          />

          <Button type="submit" variant="primary" fullWidth>
            Sign Up
          </Button>

          <div className="divider">
            <span>or sign up with</span>
          </div>

          <div className="social-buttons">
            <SocialButton icon="facebook" onClick={() => console.log('Facebook sign up')} />
            <SocialButton icon="google" onClick={() => console.log('Google sign up')} />
          </div>

          <div className="login-prompt">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;