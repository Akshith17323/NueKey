import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../Components/firebase'; // adjust path if needed

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (form.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);

      await updateProfile(userCredential.user, {
        displayName: form.name
      });

      alert('Account created successfully!');
      navigate('/home');
    } catch (err) {
      console.error(err);
      if (err.code === 'auth/email-already-in-use') {
        setError('Email already in use');
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div className="w-full max-w-md p-6 rounded-2xl border border-white/30 backdrop-blur-lg bg-black/45 text-white mt-40 mx-auto">
      <h2 className="text-3xl mb-6 text-center font-semibold">Create Account</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-transparent border-b-2 border-white focus:outline-none text-center"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
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
            placeholder="Create password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full p-2 rounded bg-transparent border-b-2 border-white focus:outline-none text-center"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block mb-1">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm password"
            value={form.confirmPassword}
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
          Sign Up
        </button>

        <p className="text-sm text-center text-white/80 mt-2">
          Already have an account?{' '}
          <Link to="/login" className="text-white underline hover:text-gray-300">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}