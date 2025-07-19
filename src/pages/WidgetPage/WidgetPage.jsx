import {
  ClockWidget,
  CounterWidget,
  InfoCardWidget,
  WeatherWidget,
  WidgetWrapper
} from "../../components/Widget/Widget";
import WidgetControl from "../../components/WidgetControl/WidgetControl";
import WidgetProvider from "../../components/WidgetProvider/WidgetProvider";
import WidgetDraggerProvider from "../../components/WidgetDraggerProvider/WidgetDraggerProvider";
import useWidgetContext from "../../contexts/useWidgetContext";
import { WIDGET_CONTAINER, WIDGET_TYPES } from "../../constants/widget.constants";

const WIDGET_TEMPLATES = {
  [WIDGET_TYPES.WEATHER]: {
    title: "Weather",
    description: "Weather widget",
    component: WeatherWidget,
    buttonClasses:
      "px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
  },
  [WIDGET_TYPES.COUNTER]: {
    title: "Counter",
    description: "Counter widget",
    component: CounterWidget,
    buttonClasses:
      "px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium hover:bg-green-200 transition-colors"
  },
  [WIDGET_TYPES.INFO_CARD]: {
    title: "Info Card",
    description: "Info Card widget",
    component: InfoCardWidget,
    buttonClasses:
      "px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
  },
  [WIDGET_TYPES.CLOCK]: {
    title: "Clock",
    description: "Clock widget",
    component: ClockWidget,
    buttonClasses:
      "px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors"
  }
};

const WidgetPage = ({ widgetTemplates }) => {
  const { displayWidgets } = useWidgetContext();

  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-500 min-w-screen min-h-screen">
      <div className=" mx-auto">
        <WidgetControl widgetTemplates={widgetTemplates} />
      </div>

      <div
        id={WIDGET_CONTAINER}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {displayWidgets.map((widget) => (
          <WidgetWrapper key={widget.id} widget={widget} widgetTemplates={widgetTemplates} />
        ))}
      </div>
    </div>
  );
};

const EnhancedWidgetPage = () => (
  <WidgetProvider widgetTemplates={WIDGET_TEMPLATES}>
    <WidgetDraggerProvider>
      {<WidgetPage widgetTemplates={WIDGET_TEMPLATES} />}
    </WidgetDraggerProvider>
  </WidgetProvider>
);
export default EnhancedWidgetPage;
