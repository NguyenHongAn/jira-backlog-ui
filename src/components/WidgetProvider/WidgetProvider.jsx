import { createContext, useCallback, useState } from "react";
import useWidgetDraggerContext from "../../contexts/useWidgetDraggerContext";
import { WidgetContext } from "../../contexts/useWidgetContext";
import { WIDGET_CONTAINER } from "../../constants/widget.constants";

const WidgetProvider = ({ widgetTemplates, children }) => {
  const [displayWidgets, setDisplayWidgets] = useState([]);
  const [widgetCount, setWidgetCount] = useState(0);
  const [showWidgetSelector, setShowWidgetSelector] = useState(false);
  const { handleDragStart, handleDragEnd } = useWidgetDraggerContext({ widgetTemplates });

  const addWidget = useCallback(
    (widgetKey) => {
      const id = `widget-${widgetKey}-${widgetCount}`;
      const template = widgetTemplates[widgetKey];

      if (!template) return;

      const widget = {
        id: id,
        type: widgetKey,
        title: template.title
      };

      setDisplayWidgets((prev) => [...prev, widget]);
      setWidgetCount(widgetCount + 1);
      // Hide widget selector after adding
      setShowWidgetSelector(false);
    },
    [widgetCount, widgetTemplates]
  );
  const removeWidget = (id) => {
    setDisplayWidgets((prev) => prev.filter((w) => w.id !== id));
  };
  const resetDashboard = () => {
    if (
      window.confirm("Are you sure you want to reset the dashboard? This will remove all widgets.")
    ) {
      setDisplayWidgets([]);
      setWidgetCount(0);
    }
  };

  return (
    <WidgetContext.Provider
      value={{
        addWidget,
        showWidgetSelector,
        setShowWidgetSelector,
        removeWidget,
        resetDashboard,
        displayWidgets
      }}
    >
      {children}
    </WidgetContext.Provider>
  );
};

export default WidgetProvider;
