import React, { createContext, useState } from 'react';

const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

const UserContext2 = createContext({
  displayName: 'John Doe',
  username: 'john.doe@reddog32.com',
});

function UserProvider({ children }) {
  const [userDetails, setUserDetails] = useState({
    username: 'John Doe',
  });

  return (
    <UserContext.Provider value={userDetails}>
      <UserDispatchContext.Provider value={setUserDetails}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext, UserDispatchContext };
