import React, { useState } from "react";
import DataForm from "./dataForm";

function Table({ list, colNames, onChoose, width = "auto", height = "auto" }) {
  function choose(obj) {
    onChoose(obj);
  }

  return (
    <div style={{ width: "50%", boxShadow: "3px 6px 3px #ccc" }}>
      {list.length > 0 && (
        <table
          cellSpacing="0"
          style={{ width: "100%", height: height, padding: "5px 10px" }}
        >
          <thead style={{ backgroundColor: "black", color: "white" }}>
            <tr>
              {colNames.map((headerItem, index) => (
                <th key={index}>{headerItem.toUpperCase()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.values(list).map((obj, index) => (
              <tr key={index}>
                {Object.values(obj).map((value, index2) => (
                  <td onClick={() => choose(obj)} key={index2}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
