import { useState } from 'react';
import SearchForm from './components/SearchForm';
import UserCard from './components/UserCard';
import { fetchGitHubUser } from './services/githubService';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (username) => {
    setLoading(true);
    setError('');
    setUser(null);

    try {
      const data = await fetchGitHubUser(username);
      if (!data || data.message === 'Not Found') {
        setError('User not found');
      } else {
        setUser(data);
      }
    } catch (err) {
      setError('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 24
