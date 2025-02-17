import { useEffect, useState } from 'react'
import fetchUsers from '../services/userService'
import User from '../type/user'

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);


    useEffect(()=>{
        fetchUsers().then((data)=>{
            setUsers(data);
        })
        .catch((err) => {
            setError(err.message);
        });

    },[]);


  return { users, error}
};

export default useUsers