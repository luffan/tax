import {createOrUpdateUsers, getUsers} from "./actions/users_action";

import DataTable from "./components/dataTable";
import {getTaxes} from "./actions/taxes_action";
import {getWorkers} from "./actions/workers_action";
import {getPayments} from "./actions/payments_action";
import {createOrUpdateIncome, getIncomes} from "./actions/incomes_action";
import {createOrUpdateExpenses, getExpenses} from "./actions/expenses_action";
import DataForm from "./components/dataForm";

const App = () => {
    const userCols = ["u_id", "u_name", "u_surname", "u_middlename", "u_passport_id", "u_login", "u_password", "u_district"];
    const taxCols = ["t_id", "t_cost", "t_expiration_date", "t_client_id", "t_payment_id"];
    const workerCols = ["w_id", "w_name", "w_surname", "w_middlename", "w_login", "w_password"];
    const paymentCols = ["p_id", "p_name", "p_surname", "p_middlename", "p_passport_id", "p_login", "p_password", "p_district"];
    const incomeCols = ["i_id", "i_sum", "i_year", "i_clientId"];
    const expensesCols = ["e_id", "e_sum", "e_year", "e_client_id"];

    return (
        <div>
            <DataTable colNames={userCols} getData={getUsers} createOrUpdate={createOrUpdateUsers}/>
            <DataTable colNames={taxCols} getData={getTaxes}/>
            <DataTable colNames={workerCols} getData={getWorkers}/>
            <DataTable colNames={paymentCols} getData={getPayments}/>
            <DataTable colNames={incomeCols} getData={getIncomes} createOrUpdate={createOrUpdateIncome}/>
            <DataTable colNames={expensesCols} getData={getExpenses} createOrUpdate={createOrUpdateExpenses}/>
        </div>
    );
};

export default App;
