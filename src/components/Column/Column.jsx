import classNames from "classnames";
import { Plus, X } from "lucide-react";
import React from "react";

const Column = (props) => {
  const { columnData, className, rootClassName, setShowNewCardFormOpen, deleteColumn } = props;
  const classes = classNames(rootClassName || "flex-shrink-0 min-w-80", className);
  const { id, color, title, cards } = columnData;

  return (
    <div key={id} className={classes}>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Column Header */}
        <div className={`${color} p-4 rounded-t-lg`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h2 className="font-semibold text-gray-900">{title}</h2>
              <span className="ml-2 bg-white bg-opacity-50 text-gray-700 px-2 py-1 text-xs rounded-[1rem] ">
                {cards.length}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setShowNewCardFormOpen(id)}
                className="text-gray-600 hover:text-blue-600 p-1"
              >
                <Plus className="w-4 h-4" />
              </button>
              <button
                onClick={() => deleteColumn(id)}
                className="text-gray-600 hover:text-red-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="p-4 min-h-[400px] bg-gray-50">
          {cards.map((card) => (
            <div key={card.id} card={card} columnId={id} className="h-20 w-20 bg-red-200" />
          ))}
          {cards.length === 0 && (
            <div className="text-center text-gray-500 py-8">
              <p>No cards yet</p>
              <button
                onClick={() => setShowNewCardFormOpen(id)}
                className="text-blue-600 hover:text-blue-700 text-sm mt-2"
              >
                Add a card
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Column;
