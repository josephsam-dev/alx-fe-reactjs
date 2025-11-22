const UserCard = ({ user }) => {
  if (!user) return null;

  return (
    <div className="user-card" style={{ border: '1px solid #ddd', padding: 16, borderRadius: 8, maxWidth: 420 }}>
      <img src={user.avatar_url} alt={user.login} width={100} style={{ borderRadius: 8 }} />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <p>Followers: {user.followers} | Following: {user.following}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
    </div>
  );
};

export default UserCard;
