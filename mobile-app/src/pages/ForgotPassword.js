import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your password reset logic here
    console.log('Reset password for:', email);
    setSubmitted(true);
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-header">
        <div className="status-bar">
          <span className="time">16:04</span>
          <div className="status-icons">
            <span>📶</span>
            <span>📱</span>
            <span>🔋</span>
          </div>
        </div>
        <h1 className="welcome-title">Reset Password</h1>
      </div>

      <div className="forgot-password-card">
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <p className="description">
              Enter your email address and we'll send you instructions to reset your password.
            </p>

            <Input
              label="Email"
              type="email"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button type="submit" variant="primary" fullWidth>
              Send Reset Link
            </Button>

            <div className="back-to-login">
              <Link to="/login">← Back to Login</Link>
            </div>
          </form>
        ) : (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Check Your Email</h2>
            <p>
              We've sent password reset instructions to <strong>{email}</strong>
            </p>
            <Button variant="primary" fullWidth onClick={() => setSubmitted(false)}>
              Resend Email
            </Button>
            <div className="back-to-login">
              <Link to="/login">← Back to Login</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;