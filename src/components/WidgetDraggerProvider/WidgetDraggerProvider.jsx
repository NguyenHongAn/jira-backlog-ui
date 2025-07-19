import { createContext, useCallback, useRef } from "react";
import { WidgetDraggerContext } from "../../contexts/useWidgetDraggerContext";
import useWidgetContext from "../../contexts/useWidgetContext";

const WidgetDraggerProvider = ({ children }) => {
  const draggedWidget = useRef();
  const { setDisplayWidgets } = useWidgetContext();

  const handleDragStart = (e, widgetId) => {
    draggedWidget.current = widgetId;
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = useCallback(
    (e, dropId) => {
      e.preventDefault();
      if (!draggedWidget.current || draggedWidget.current === dropId) return;

      // Move dragged widget to the beginning
      setDisplayWidgets((prevWidgets) => {
        const draggedIndex = prevWidgets.findIndex((w) => w.id === draggedWidget.current);
        const dropIndex = prevWidgets.findIndex((w) => w.id === dropId);

        if (draggedIndex === -1 || dropIndex === -1) return prevWidgets;
        [prevWidgets[dropIndex], prevWidgets[draggedIndex]] = [
          prevWidgets[draggedIndex],
          prevWidgets[dropIndex]
        ];
        return [...prevWidgets];
      });
    },
    [setDisplayWidgets]
  );

  return (
    <WidgetDraggerContext.Provider
      value={{ draggedWidget, handleDragStart, handleDrop, handleDragOver }}
    >
      {children}
    </WidgetDraggerContext.Provider>
  );
};

export default WidgetDraggerProvider;
