import React from "react";

import UserList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image:
        "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
      places: 3,
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;
