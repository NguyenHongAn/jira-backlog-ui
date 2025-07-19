export const WeatherWidget = ({
  className,
  rootClassName,
  humidity = 22,
  wind = 12,
  pressure = 1013,
  temperature = 22
}) => {
  return (
    <div className="text-center">
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

export const CounterWidget = ({ className, rootClassName, count = 0 }) => {
  return (
    <div className="text-center">
      <div className="text-6xl mb-2">🔢</div>
      <div className="text-4xl font-bold text-blue-600 mb-2">{count}</div>
      <div className="text-gray-600 text-lg mb-4">Counter</div>
      <div className="space-y-2 text-sm text-gray-500">
        <div className="flex justify-between">
          <span>Count:</span>
          <span className="font-medium">{count}</span>
        </div>
      </div>
    </div>
  );
};

export const InfoCardWidget = ({
  className,
  rootClassName,
  title = "Title",
  description = "Description",
  icon = "📄"
}) => {
  return (
    <div className="text-center">
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

export const ClockWidget = ({ className, rootClassName, time = "12:00 AM" }) => {
  return (
    <div className="text-center">
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
