import classNames from "classnames";
import { Flag, Trash2, User } from "lucide-react";

import { getCardTypeColor, getPriorityColor } from "../../utils/ui";

const JiraCard = ({ className, rootClassName, card, columnId, deleteCard, handleDragStart }) => {
  const classes = classNames(
    rootClassName ||
      "bg-white border border-gray-200 rounded-lg p-3 mb-3 cursor-move hover:shadow-md transition-shadow group",
    className
  );
  const { type, id, title, priority, storyPoints, assignee, labels } = card;
  const cardTypeColor = getCardTypeColor(type);
  return (
    <div
      role="button"
      className={classes}
      draggable
      onDragStart={(e) => handleDragStart(e, card, columnId)}
    >
      <div className="flex items-start justify-between mb-2">
        <span
          className={`inline-block px-2 py-1 rounded text-xs font-medium border ${cardTypeColor}`}
        >
          {type}
        </span>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => deleteCard(columnId, id)}
            className="text-gray-400 hover:text-red-500 p-1"
          >
            <Trash2 className="w-3 h-3" />
          </button>
        </div>
      </div>

      <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">{title}</h3>

      <div className="text-xs text-gray-500 mb-2">{id}</div>

      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <Flag className={`w-3 h-3 mr-1 ${getPriorityColor(priority)}`} />
            <span>{priority}</span>
          </div>
          <div className="flex items-center">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{storyPoints}</span>
          </div>
        </div>
        <div className="flex items-center">
          <User className="w-3 h-3 mr-1" />
          <span className="truncate max-w-20">{assignee || "Unassigned"}</span>
        </div>
      </div>

      {labels.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {labels.map((label, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default JiraCard;
