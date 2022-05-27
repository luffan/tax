import React, {useState} from "react";
import {useEffect} from "react";
import Table from "./table";

function DataTable({colNames, getData}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

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
            console.log(error);
        }
    }, []);

    if (loading) return <span>Loading</span>;

    // data will be null when fetch call fails
    if (!data) return <span>Data not available</span>;

    // when data is available, title is shown
    return (
        <div>
            <Table list={data} colNames={colNames}/>
        </div>
    );
}

export default DataTable;
