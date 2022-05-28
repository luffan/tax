import React from "react";

function DataForm({columnNames, onSubmit}) {
    function submit() {
        var args = [];
        columnNames.forEach(el => {
                args.push(document.getElementById(el).value);
                console.log(document.getElementById(el).value);
                console.log(el);
            }
        )
        onSubmit(args);
    }

    return (
        <form>
            {columnNames.map((headerItem, index) => (
                <input
                    type="text"
                    placeholder={headerItem}
                    name={headerItem}
                    id={headerItem}
                />
            ))}
            <button type="button" onClick={() => submit()}>Update</button>
        </form>
    );
}

export default DataForm;
