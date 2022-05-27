import React from "react";

function DeleteForm({headerItem, onDelete}) {
    return (
        <form>
            <input
                type="text"
                placeholder={headerItem}
                name={headerItem}
                id={headerItem + '_'}
            />
            <button type="button" onClick={() => onDelete(document.getElementById(headerItem + '_').value)}>Delete</button>
        </form>
    );
}

export default DeleteForm;
