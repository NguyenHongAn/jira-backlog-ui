import { Plus } from "lucide-react";

const WIDGET_SELECTOR = "widgetSelector";

const WidgetControl = ({ widgets }) => {
  const toggleAddWidget = () => {
    const selector = document.getElementById(WIDGET_SELECTOR);
    selector.classList.toggle("hidden");
    selector.classList.toggle("flex");
  };
  return (
    <div className=" backdrop-blur-[10px] bg-[rgba(255,_255,_255,_0.95)] rounded-b-2xl lg:rounded-2xl p-6 mb-6 ">
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
        <button className="px-4 py-2  bg-white/80 text-gray-700 rounded-full font-semibold hover:bg-white hover:scale-105 transform transition-all duration-200 shadow-lg border border-gray-200">
          Reset
        </button>

        <div id={WIDGET_SELECTOR} className="hidden flex-wrap gap-2">
          <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors">
            Weather
          </button>
          <button className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium hover:bg-green-200 transition-colors">
            Counter
          </button>
          <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors">
            Info Card
          </button>
          <button className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors">
            Clock
          </button>
        </div>
      </div>
    </div>
  );
};

export default WidgetControl;
