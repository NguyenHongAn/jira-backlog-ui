import React from "react";

const NewColumnForm = ({
  newColumnTitle,
  setNewColumnTitle,
  setShowNewColumnForm,
  addNewColumn
}) => {
  return (
    <div className="flex-shrink-0 w-80">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <input
          type="text"
          placeholder="Column title..."
          value={newColumnTitle}
          onChange={(e) => setNewColumnTitle(e.target.value)}
          className="w-full text-sm border border-gray-300 rounded px-3 py-2 mb-3"
          autoFocus
        />
        <div className="flex space-x-2">
          <button
            onClick={addNewColumn}
            className="flex-1 bg-blue-600 text-white text-sm py-2 rounded hover:bg-blue-700"
          >
            Add Column
          </button>
          <button
            onClick={() => {
              setShowNewColumnForm(false);
              setNewColumnTitle("");
            }}
            className="flex-1 bg-gray-200 text-gray-700 text-sm py-2 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewColumnForm;
