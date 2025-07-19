import { createContext, useCallback, useContext } from "react";

export const WidgetDraggerContext = createContext({
  handleDragStart: () => {},
  handleDrop: () => {}
});

export default function useWidgetDraggerContext() {
  const context = useContext(WidgetDraggerContext);
  if (!context) {
    throw new Error("useWidgetContext must be used within a WidgetDraggerProvider");
  }
  return context;
}
