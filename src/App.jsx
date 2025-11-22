import { useState } from 'react';
import SearchForm from './components/SearchForm';
import UserCard from './components/UserCard';
import { fetchGitHubUser } from './services/githubService';

function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    const data = await fetchGitHubUser(username);
    setUser(data);
  };

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui, sans-serif' }}>
      <h1>GitHub User Search</h1>
      <SearchForm onSearch={handleSearch} />
      <UserCard user={user} />
    </div>
  );
}

export default App;
