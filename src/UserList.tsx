import React from 'react';
import { useEffect } from 'react';

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
  useEffect(() => {
    console.log('user 값이 설정됨');
    console.log(user);
    return () => {
      console.log('user 가 바뀌기 전..');
      console.log(user);
    };
  }, [user]);
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
