import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers } from "../features/user/userSlice";
import { useAppDispatch, RootState } from "./redux/store"; // Import typed dispatch

const UsersList = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchUsers()); // Fetch users when component mounts
  }, [dispatch]);

  return (
    <div>
      <h2>Users List</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
