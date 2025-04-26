import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [signupcheck,setsignupcheck]=useState(false);

  useEffect(() => {
    setShowForm(true);
  }, []);

  const handleSignUp = async(e) => {
    e.preventDefault();
    const res=await fetch('http://localhost:3000/auth/SignUp',{
      method:'POST',
      headers:{
        "Content-Type": "application/json", 
      },
      body:JSON.stringify({name,email,password,role:'user'})
    })
    if(!res){
      setsignupcheck(true);
    }
    alert('successfully signed up');
    navigate('/login');
  };

  return (
    <>
   {signupcheck?<p>error signing in</p>:(
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-purple-300">
      
      <div className={`bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md transform transition-all duration-700 ${
          showForm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>

        <h2 className="text-4xl font-extrabold text-center text-purple-600 mb-8 tracking-wide animate-pulse">
          Create Account
        </h2>

        <form onSubmit={handleSignUp} className="space-y-8">
          <div className="relative group">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-400 transition-all"
              placeholder="Full Name"
            />
          </div>

          <div className="relative group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-400 transition-all"
              placeholder="Email Address"
            />
          </div>

          <div className="relative group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-400 transition-all"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-bold tracking-wide transition-all transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-purple-600 font-semibold hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>

    </div>
    )}
    </>
    
  );
};

export default SignUp;
