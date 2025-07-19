import { createContext, useCallback, useContext } from "react";

export const WidgetContext = createContext({
  addWidget: () => {}
});

export default function useWidgetContext() {
  const context = useContext(WidgetContext);
  if (!context) {
    throw new Error("useWidgetContext must be used within a WidgetContextProvider");
  }
  return context;
}
