import { useCallback, useState } from "react";
import { WidgetContext } from "../../contexts/useWidgetContext";

const WidgetProvider = ({ widgetTemplates, children }) => {
  const [displayWidgets, setDisplayWidgets] = useState([
    { id: `widget-weather-${0}`, type: "weather", title: "Weather" },
    { id: `widget-counter-${1}`, type: "counter", title: "Counter" },
    { id: `widget-infoCard-${2}`, type: "infoCard", title: "Info Card" }
  ]);
  const [widgetCount, setWidgetCount] = useState(0);
  const [showWidgetSelector, setShowWidgetSelector] = useState(false);

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
      setWidgetCount((prevCount) => prevCount + 1);
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
        displayWidgets,
        setDisplayWidgets
      }}
    >
      {children}
    </WidgetContext.Provider>
  );
};

export default WidgetProvider;
