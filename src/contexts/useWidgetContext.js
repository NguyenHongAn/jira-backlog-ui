import { createContext, useCallback, useContext } from "react";

export const WidgetContext = createContext({
  addWidget: () => {},
  showWidgetSelector: false,
  setShowWidgetSelector: () => {},
  removeWidget: () => {},
  resetDashboard: () => {},
  displayWidgets: []
});

export default function useWidgetContext() {
  const context = useContext(WidgetContext);
  if (!context) {
    throw new Error("useWidgetContext must be used within a WidgetContextProvider");
  }
  return context;
}
