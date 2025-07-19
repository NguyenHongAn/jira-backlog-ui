import {
  ClockWidget,
  CounterWidget,
  InfoCardWidget,
  WeatherWidget
} from "../../components/Widget/Widget";
import WidgetControl from "../../components/WidgetControl/WidgetControl";

const WIDGET_CONTAINER = "widgetsContainer";

const WIDGET_TEMPLATES = {
  weather: {
    title: "Weather",
    description: "Weather widget",
    icon: "🌤️",
    component: WeatherWidget
  },
  counter: {
    title: "Counter",
    description: "Counter widget",
    icon: "🔢",
    component: CounterWidget
  },
  infoCard: {
    title: "Info Card",
    description: "Info Card widget",
    icon: "📄",
    component: InfoCardWidget
  },
  clock: {
    title: "Clock",
    description: "Clock widget",
    icon: "🕒",
    component: ClockWidget
  }
};

const WidgetPage = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-500 min-w-screen min-h-screen">
      <div className="max-w-7xl mx-auto">
        <WidgetControl widgets={WIDGET_TEMPLATES} />
      </div>
      <div
        id={WIDGET_CONTAINER}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <WeatherWidget />
        <ClockWidget />
        <InfoCardWidget />
        <CounterWidget />
      </div>
    </div>
  );
};

export default WidgetPage;
