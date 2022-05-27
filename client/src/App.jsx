import {createOrUpdateUsers, getUsers} from "./actions/users_action";

import DataTable from "./components/dataTable";
import {getTaxes} from "./actions/taxes_action";
import {getWorkers} from "./actions/workers_action";
import {getPayments} from "./actions/payments_action";
import {getIncomes} from "./actions/incomes_action";
import {getExpenses} from "./actions/expenses_action";
import DataForm from "./components/dataForm";

const App = () => {
    const userCols = ["id", "name", "surname", "middlename", "passport_id", "login", "password", "district"];
    const taxCols = ["id", "cost", "expiration_date", "client_id", "payment_id"];
    const workerCols = ["id", "name", "surname", "middlename", "login", "password"];
    const paymentCols = ["id", "name", "surname", "middlename", "passport_id", "login", "password", "district"];
    const incomeCols = ["id", "sum", "year", "client_id"];
    const expensesCols = ["id", "sum", "year", "client_id"];

    return (
        <div>
            <DataTable colNames={userCols} getData={getUsers}/>
            <DataTable colNames={taxCols} getData={getTaxes}/>
            <DataTable colNames={workerCols} getData={getWorkers}/>
            <DataTable colNames={paymentCols} getData={getPayments}/>
            <DataTable colNames={incomeCols} getData={getIncomes}/>
            <DataTable colNames={expensesCols} getData={getExpenses}/>
        </div>
    );
};

export default App;
