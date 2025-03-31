import React, { useEffect, useState } from "react";
import { IUsers } from "../types/userTypes";

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<IUsers[]>([]);

  const getUsers = () => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((user) => {
        setUsers(user?.users);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
      {users.map((user, index) => (
        <div className="border w-[100px] h-[150px] text-center" key={index}>
          <h2>{user?.firstName}</h2>
          <p>{user?.lastName}</p>
          <p>{user?.age}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
