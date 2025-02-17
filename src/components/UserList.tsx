import useUsers from './useUsers'

export const UserList = () => {
    const{users,error} = useUsers();

    if (error) return <p>Error : {error}</p>;

  return (
    <div style={{ textAlign: "center" }}>
        <h2>User List</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
            {users.map((user) => (
                <div key={user.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}>
                    <img src={user.avatar} alt={user.first_name} style={{ borderRadius: "50%", width: "100px" }} />
                    <p><strong>{user.first_name} {user.last_name}</strong></p>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default UserList;