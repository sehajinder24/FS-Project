import React, { useEffect } from "react";

const GetUsers = () => {
  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();

      data.slice(0, 5).forEach((user) => {
        console.log(user.name);
      });
    } catch (error) {
      console.error("Error fetching users:", error.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-semibold text-blue-700">
	Users have been added in console
      </h1>
    </div>
  );
};

export default GetUsers;