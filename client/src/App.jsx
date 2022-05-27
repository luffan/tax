import React, { useEffect, useState } from "react";
import { getUsers } from "./actions/users_action";

import Table from "./components/table.js";
import UserTable from "./components/userTable";

const App = () => {
  return (
    <div>
      <UserTable/>
    </div>
  );
};

export default App;
