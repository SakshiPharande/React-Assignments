const API_URL = "https://reqres.in/api/users"

const fetchUsers = async() => {
    const response = await fetch(API_URL);
    if(!response.ok){
        throw new Error("Failed to fetch user");
    }

    const data = await response.json();
    return data.data;
};

export default fetchUsers