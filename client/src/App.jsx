import {
  createOrUpdateUsers,
  deleteUser,
  getUsers,
} from "./actions/users_action";

import DataTable from "./components/dataTable";
import {
  createOrUpdateTaxes,
  deleteTax,
  getTaxes,
} from "./actions/taxes_action";
import {
  createOrUpdateWorker,
  deleteWorker,
  getWorkers,
} from "./actions/workers_action";
import {
  createOrUpdatePayment,
  deletePayment,
  getPayments,
} from "./actions/payments_action";
import {
  createOrUpdateIncome,
  deleteIncome,
  getIncomes,
} from "./actions/incomes_action";
import {
  createOrUpdateExpenses,
  deleteExpenses,
  getExpenses,
} from "./actions/expenses_action";
import React from "react";

const App = () => {
  const userCols = [
    "u_id",
    "u_name",
    "u_surname",
    "u_middlename",
    "u_passport_id",
    "u_login",
    "u_password",
    "u_district",
  ];
  const taxCols = [
    "t_id",
    "t_cost",
    "t_expiration_date",
    "t_client_id",
    "t_payment_id",
  ];
  const workerCols = [
    "w_id",
    "w_name",
    "w_surname",
    "w_middlename",
    "w_login",
    "w_password",
  ];
  const paymentCols = ["p_id", "p_date", "p_amount"];
  const incomeCols = ["i_id", "i_sum", "i_year", "i_clientId"];
  const expensesCols = ["e_id", "e_sum", "e_year", "e_client_id"];

  return (
    <div>
      <DataTable
        colNames={userCols}
        getData={getUsers}
        createOrUpdate={createOrUpdateUsers}
        onDelete={deleteUser}
      />
      <br />
      <br />
      <DataTable
        colNames={taxCols}
        getData={getTaxes}
        createOrUpdate={createOrUpdateTaxes}
        onDelete={deleteTax}
      />
      <br />
      <br />
      <DataTable
        colNames={workerCols}
        getData={getWorkers}
        createOrUpdate={createOrUpdateWorker}
        onDelete={deleteWorker}
      />
      <br />
      <br />
      <DataTable
        colNames={paymentCols}
        getData={getPayments}
        createOrUpdate={createOrUpdatePayment}
        onDelete={deletePayment}
      />
      <br />
      <br />
      <DataTable
        colNames={incomeCols}
        getData={getIncomes}
        createOrUpdate={createOrUpdateIncome}
        onDelete={deleteIncome}
      />
      <br />
      <br />
      <DataTable
        colNames={expensesCols}
        getData={getExpenses}
        createOrUpdate={createOrUpdateExpenses}
        onDelete={deleteExpenses}
      />
    </div>
  );
};

export default App;
