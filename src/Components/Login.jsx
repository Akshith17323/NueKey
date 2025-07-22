import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Components/firebase';

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      alert('Login successful!');
      navigate('/home');
    } catch (err) {
      console.error(err);
      if (err.code === 'auth/user-not-found') {
        setError('No user found with this email');
      } else if (err.code === 'auth/wrong-password') {
        setError('Incorrect password');
      } else {
        setError('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className="w-full max-w-md p-6 rounded-2xl border border-white/30 backdrop-blur-lg bg-black/45 text-white mt-40 mx-auto">
      <h2 className="text-3xl mb-6 text-center font-semibold">Welcome Back</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="demo@example.com"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-transparent border-b-2 border-white focus:outline-none text-center"
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-transparent border-b-2 border-white focus:outline-none text-center"
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <button
          type="submit"
          className="mt-2 bg-white text-black rounded px-4 py-2 hover:bg-black hover:text-white transition"
        >
          Login
        </button>

        <p className="text-sm text-center text-white/80 mt-2">
          Don't have an account?{' '}
          <Link to="/signup" className="text-white underline hover:text-gray-300">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}