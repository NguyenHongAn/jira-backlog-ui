import { useState } from "react";
import useWidgetDraggerContext from "../../contexts/useWidgetDraggerContext";
import useWidgetContext from "../../contexts/useWidgetContext";

export const WeatherWidget = ({
  className,
  rootClassName,
  id,
  humidity = 22,
  wind = 12,
  pressure = 1013,
  temperature = 22
}) => {
  return (
    <div className="text-center" id={id}>
      <div className="text-6xl mb-2">🌤️</div>
      <div className="text-4xl font-bold text-blue-600 mb-2">{temperature}°C</div>
      <div className="text-gray-600 text-lg mb-4">Partly Cloudy</div>
      <div className="space-y-2 text-sm text-gray-500">
        <div className="flex justify-between">
          <span>Humidity:</span>
          <span className="font-medium">{humidity}%</span>
        </div>
        <div className="flex justify-between">
          <span>Wind:</span>
          <span className="font-medium">{wind} km/h</span>
        </div>
        <div className="flex justify-between">
          <span>Pressure:</span>
          <span className="font-medium">{pressure} hPa</span>
        </div>
      </div>
    </div>
  );
};

export const CounterWidget = ({ className, rootClassName, id }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="text-center" id={id}>
      <div className="text-6xl mb-2">🔢</div>
      <div className="text-4xl font-bold text-blue-600 mb-2">{count}</div>
      <div className="text-gray-600 text-lg mb-4">Counter</div>
      <div className="space-y-2 text-sm text-gray-500 flex justify-center">
        <div className="flex gap-2 mx-auto">
          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-lg text-sm text-white"
          >
            +1
          </button>
          <button
            onClick={() => setCount((prev) => prev - 1)}
            className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-lg text-sm text-white"
          >
            -1
          </button>
        </div>
      </div>
    </div>
  );
};

export const InfoCardWidget = ({
  className,
  rootClassName,
  id,
  title = "Title",
  description = "Description",
  icon = "📄"
}) => {
  return (
    <div id={id} className="text-center">
      <div className="text-6xl mb-2">{icon}</div>
      <div className="text-4xl font-bold text-blue-600 mb-2">{title}</div>
      <div className="text-gray-600 text-lg mb-4">{description}</div>
      <div className="space-y-2 text-sm text-gray-500">
        <div className="flex justify-between">
          <span>Title:</span>
          <span className="font-medium">{title}</span>
        </div>
        <div className="flex justify-between">
          <span>Description:</span>
          <span className="font-medium">{description}</span>
        </div>
      </div>
    </div>
  );
};

export const ClockWidget = ({ className, rootClassName, id, time = "12:00 AM" }) => {
  return (
    <div id={id} className="text-center">
      <div className="text-6xl mb-2">🕒</div>
      <div className="text-4xl font-bold text-blue-600 mb-2">{time}</div>
      <div className="text-gray-600 text-lg mb-4">Clock</div>
      <div className="space-y-2 text-sm text-gray-500">
        <div className="flex justify-between">
          <span>Time:</span>
          <span className="font-medium">{time}</span>
        </div>
      </div>
    </div>
  );
};

export const WidgetWrapper = ({ widget, widgetTemplates }) => {
  const WidgetComponent = widgetTemplates[widget.type]?.component;
  const [isDragging, setIsDragging] = useState(false);
  const { handleDragStart, handleDrop, handleDragOver } = useWidgetDraggerContext();
  const { removeWidget } = useWidgetContext();

  if (!WidgetComponent) return null;

  const onDragStart = (e) => {
    setIsDragging(true);
    handleDragStart(e, widget.id);
  };

  const onDragEnd = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const { id, title } = widget;

  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={handleDragOver}
      onDrop={(e) => {
        handleDrop(e, id);
      }}
      className={`
        backdrop-blur-[10px] bg-[rgba(255,_255,_255,_0.95)]
        rounded-2xl p-6 shadow-lg hover:shadow-2xl transform transition-all duration-200 relative cursor-grab active:cursor-grabbing
        ${isDragging ? "opacity-80 rotate-2 scale-105" : "hover:scale-105"}
      `}
    >
      <div className="flex justify-between items-center mb-4">
        <div className={`text-lg font-semibold`}>{title}</div>
        <button
          onClick={() => removeWidget(id)}
          className="w-8 h-8 bg-red-500 text-white rounded-full hover:bg-red-600 hover:scale-110 transform transition-all duration-200 flex items-center justify-center text-sm font-bold shadow-lg z-10"
        >
          ×
        </button>
      </div>
      <WidgetComponent id={id} />
    </div>
  );
};
