import React from "react";

function DataForm({columnNames, onSubmit}) {
    function submit() {
        var args = [];
        columnNames.forEach(el => {
                console.log(el);
                args.push(document.getElementById(el).value);
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
