const UserProfile = (Props) => {
  return (
    <div>
      <h2>{Props.name}</h2>
      <p>{Props.age}</p>
      <p>{Props.bio}</p>
    </div>
  );
};

export default UserProfile;
