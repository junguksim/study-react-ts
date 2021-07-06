import React from 'react';

type User = {
  id: number;
  username: string;
  email: string;
  active: boolean;
};

type UserProps = {
  users: User[];
  onRemove: Function;
  onToggle: Function;
};
function UserOne({ user, onRemove, onToggle }: any) {
  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black',
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }: UserProps) {
  return (
    <div>
      {users.map((user) => (
        <UserOne
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;
