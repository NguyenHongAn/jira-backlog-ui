import {
  BUG_CARD,
  PRIORITY_CRITICAL,
  PRIORITY_HIGH,
  PRIORITY_LOW,
  PRIORITY_MEDIUM,
  STORY_CARD,
  TASK_CARD
} from "../constants/board.constants";

export const getCardTypeColor = (type) => {
  {
    switch (type) {
      case STORY_CARD:
        return "bg-green-100 text-green-800 border-green-300";
      case TASK_CARD:
        return "bg-blue-100 text-blue-800 border-blue-300";
      case BUG_CARD:
        return "bg-red-100 text-red-800 border-red-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  }
};

export const getPriorityColor = (priority) => {
  switch (priority) {
    case PRIORITY_CRITICAL:
      return "text-red-600";
    case PRIORITY_HIGH:
      return "text-orange-600";
    case PRIORITY_MEDIUM:
      return "text-yellow-600";
    case PRIORITY_LOW:
      return "text-green-600";
    default:
      return "text-gray-600";
  }
};
