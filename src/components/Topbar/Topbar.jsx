import React from "react";
import classNames from "classnames";
import { Plus } from "lucide-react";

const Topbar = (props) => {
  const { className, rootClassName, setShowNewColumnForm } = props;

  const classes = classNames(
    rootClassName || "bg-white border-b border-gray-200 px-6 py-4 min-w-screen",
    className
  );

  return (
    <div className={classes}>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="md:text-xl lg:text-2xl font-bold text-gray-900 my-1">Kanban Board</h1>
          <p className="text-sm text-gray-600">Project Management Board</p>
        </div>
        <button
          onClick={() => setShowNewColumnForm(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer break-words"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Column
        </button>
      </div>
    </div>
  );
};

export default Topbar;
