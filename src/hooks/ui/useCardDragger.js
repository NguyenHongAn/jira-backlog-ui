import { useCallback, useState } from "react";

export const useCardDragger = ({ setColumns }) => {
  const [draggedElement, setDraggedElement] = useState(null);

  const handleDragStart = (e, card, sourceColumnId) => {
    setDraggedElement({ card, sourceColumnId });
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e, targetColumnId) => {
    e.preventDefault();
    if (!draggedElement || draggedElement.sourceColumnId === targetColumnId) return;

    const { card, sourceColumnId } = draggedElement;

    setColumns((prev) => ({
      ...prev,
      [sourceColumnId]: {
        ...prev[sourceColumnId],
        cards: prev[sourceColumnId].cards.filter((c) => c.id !== card.id)
      },
      [targetColumnId]: {
        ...prev[targetColumnId],
        cards: [...prev[targetColumnId].cards, card]
      }
    }));

    setDraggedElement(null);
  };

  return { handleDragStart, handleDragOver, handleDrop };
};
