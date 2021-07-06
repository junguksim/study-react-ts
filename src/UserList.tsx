import React from 'react';

type User = {
  id: number;
  username: string;
  email: string;
};

type UserProps = {
  users: User[];
};
function UserOne({ user }: any) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList({ users }: UserProps) {
  return (
    <div>
      {users.map((user) => (
        <UserOne user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
