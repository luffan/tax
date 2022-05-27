import React from 'react';
import { getUsers } from './actions/users_action';

function App() {
  var users = getUsers();
  console.log(users);
  return (
    <div>users</div>
  );
}

export default App;