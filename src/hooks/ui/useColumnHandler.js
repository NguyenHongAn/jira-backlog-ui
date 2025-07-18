import { useCallback } from "react";

export const useColumnHandler = ({
  setColumns,
  newColumnTitle,
  setNewColumnTitle,
  setShowNewColumnForm,
  columns
}) => {
  const addNewColumn = useCallback(() => {
    if (!newColumnTitle.trim()) return;

    const newId = Math.max(...Object.keys(columns).map(Number)) + 1;
    setColumns((prev) => ({
      ...prev,
      [newId]: {
        id: newId,
        title: newColumnTitle,
        color: "bg-gray-100",
        cards: []
      }
    }));
    setNewColumnTitle("");
    setShowNewColumnForm(false);
  }, [newColumnTitle, setColumns, setNewColumnTitle, setShowNewColumnForm, columns]);

  const deleteColumn = (deleteColumnId) => {
    setColumns((prev) => {
      const newColumns = Object.entries(prev).reduce((acc, [id, column]) => {
        if (id === deleteColumnId) {
          return acc;
        }

        acc[id] = column;
        return acc;
      }, {});
      return newColumns;
    });
  };

  return { addNewColumn, deleteColumn };
};
