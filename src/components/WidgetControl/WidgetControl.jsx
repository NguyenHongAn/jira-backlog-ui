import { Plus } from "lucide-react";
import useWidgetContext from "../../contexts/useWidgetContext";

const WIDGET_SELECTOR = "widgetSelector";

const WidgetControl = ({ widgetTemplates }) => {
  const { addWidget, showWidgetSelector, setShowWidgetSelector, resetDashboard } = useWidgetContext(
    {
      widgetTemplates
    }
  );

  const toggleAddWidget = () => {
    setShowWidgetSelector((prev) => !prev);
  };
  return (
    <div className="backdrop-blur-[10px] bg-[rgba(255,_255,_255,_0.95)]  p-6 mb-6 ">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
        My Dashboard
      </h1>
      <div className="flex flex-wrap gap-3 items-center">
        <button
          className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600  text-white rounded-full hover:scale-105 cursor-pointer"
          onClick={toggleAddWidget}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Widget
        </button>
        <button
          onClick={resetDashboard}
          className="px-4 py-2  bg-white/80 text-gray-700 rounded-full font-semibold hover:bg-white hover:scale-105 transform transition-all duration-200 shadow-lg border border-gray-200"
        >
          Reset
        </button>

        {showWidgetSelector && (
          <div id={WIDGET_SELECTOR} className="flex flex-wrap gap-2">
            {Object.entries(widgetTemplates).map(([key, widget]) => {
              const { buttonClasses, title } = widget;
              return (
                <button key={key} className={buttonClasses} onClick={() => addWidget(key)}>
                  {title}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default WidgetControl;
