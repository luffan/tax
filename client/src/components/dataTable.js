import React, {useState} from "react";
import {useEffect} from "react";
import Table from "./table";
import DataForm from "./dataForm";
import {createOrUpdateUsers} from "../actions/users_action";
import DeleteForm from "./deleteForm";

function DataTable({colNames, getData, createOrUpdate, onDelete}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    function useUpdate() {
        useEffect(async () => {
            try {
                // set loading to true before calling API
                setLoading(true);
                const data = await getData();
                setData(data);
                // switch loading to false after fetch is complete
                setLoading(false);
            } catch (error) {
                // add error handling here
                setLoading(false);
            }
        }, []);
    }


    async function useSubmit(list) {
        console.log(list);
        await createOrUpdate(list);
        const data = await getData();
        setData(data);
    }

    async function useDelete(id) {
        console.log(id);
        await onDelete(id);
        const data = await getData();
        setData(data);
    }

    useUpdate();

    if (loading) return <span>Loading</span>;

    // data will be null when fetch call fails
    if (!data) return <span>Data not available</span>;

    // when data is available, title is shown
    return (
        <div>
            <Table list={data} colNames={colNames}/>
            <DataForm columnNames={colNames} onSubmit={useSubmit}/>
            <DeleteForm headerItem={colNames[0]} onDelete={useDelete}/>
        </div>
    );
}


export default DataTable;
