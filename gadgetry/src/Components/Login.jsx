import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setlogin } from '../Redux/LoginSlice';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPassword] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [logincheck,setlogincheck]=useState(false);
  const dispatch=useDispatch();


  useEffect(() => {
    setShowForm(true);
  }, []);

  const handleLogin = async(e) => {
    e.preventDefault();
    
    const res=await fetch('http://localhost:3000/auth/login',{
      method:'POST',
      headers:{
        "Content-Type": "application/json", 
      },
      body:JSON.stringify({email:email,password:pass})
    })
    if (!res.ok) {
      setlogincheck(true);
      return;
    }
  const userData = await res.json(); 
  console.log(userData);

  dispatch(setlogin(userData)); 
  navigate('/');
  }

  return (
    <>
    {logincheck? <p>error loggin in </p>:(
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      
      <div className={`bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md transform transition-all duration-700 ${
          showForm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>

        <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-8 tracking-wide animate-pulse">
          Welcome Back!
        </h2>

        <form onSubmit={handleLogin} className="space-y-8">
          <div className="relative group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 transition-all"
              placeholder="Email Address"
            />
          </div>

          <div className="relative group">
            <input
              type="password"
              value={pass}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-400 transition-all"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold tracking-wide transition-all transform hover:scale-105"
          >
            Sign In
          </button>
        </form>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Not a user?{' '}
            <Link to="/SignUp" className="text-blue-600 font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      
    </div>
)}
    </>
  );
};

export default Login;
