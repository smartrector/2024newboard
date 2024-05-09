import React from "react";

function CheckBox({continents, checkedContinents, onFilters}) {
  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-5 ">
      {continents?.map((continents) => {
        return (
          <div className="bg-blue-100 px-2 py-4" key={continents._id}>
            <input type="checkbox" id={continents._id} />
            <label htmlFor={continents._id}> {continents.name}</label>
          </div>
        );
      })}
    </div>
  );
}

export default CheckBox;
