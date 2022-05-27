import React, { useState } from "react";
import {useEffect} from "react";
import {getUsers} from "../actions/users_action";
import Table from "./table";

function UserTable() {
    const colNames = [
        "id",
        "Name",
        "Surname",
        "Middlename",
        "PasportID",
        "LogIn",
        "Password",
        "District",
    ];

    const [users, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        try {
            // set loading to true before calling API
            setLoading(true);
            const data = await getUsers();
            setUser(data);
            // switch loading to false after fetch is complete
            setLoading(false);
        } catch (error) {
            // add error handling here
            setLoading(false);
            console.log(error);
        }
    }, []);

    if (loading) return <span>Loading</span>;

    // data will be null when fetch call fails
    if (!users) return <span>Data not available</span>;

    // when data is available, title is shown
    return (
        <div>
            <Table list={users} colNames={colNames} />
        </div>
    );
}

export default UserTable;
