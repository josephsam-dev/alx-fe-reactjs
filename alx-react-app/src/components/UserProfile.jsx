// src/components/UserProfile.jsx

const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '15px', borderRadius: '8px' }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
