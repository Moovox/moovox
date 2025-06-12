import { Activity, Thermometer } from "lucide-react";
import HeartBeatIcon from "../../common/HeartBeatIcon";
import Card from "../../ui/Card";

const AnimalTelemetry = ({ telemetria }) => {
  // Simular dados de telemetria enquanto não há dados reais
  const mockTelemetryData = {
    animal: telemetria?.animal || "Boi da Silva",
    temperature: "38.5°C",
    heartRate: "72 bpm",
    lastUpdate: new Date().toLocaleString("en-US"),
    status: "normal", // normal, alert, critical
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "alert":
        return "text-orange-600";
      case "critical":
        return "text-red-600";
      default:
        return "text-green-600";
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case "alert":
        return "bg-orange-50";
      case "critical":
        return "bg-red-50";
      default:
        return "bg-green-50";
    }
  };

  return (
    <div>
      <Card
        variant="rural"
        title="Animal Telemetry"
        icon={<Activity className="h-5 w-5 text-black sm:h-6 sm:w-6" />}
        className="h-[240px] transform-gpu sm:h-[280px] md:h-[400px]"
      >
        {mockTelemetryData.animal ? (
          <div className="space-y-4 p-2 sm:p-4">
            {/* Animal Info */}
            <div className="flex items-center gap-3 rounded-lg bg-gray-50 p-3">
              <Activity className="h-5 w-5 text-blue-600" />
              <div className="flex-1">
                <span className="text-sm font-semibold text-gray-700">
                  Animal Monitorado:
                </span>
                <p className="text-base font-medium text-gray-900">
                  {mockTelemetryData.animal}
                </p>
              </div>
            </div>

            {/* Temperature */}
            <div
              className={`flex items-center gap-3 rounded-lg p-3 ${getStatusBg(mockTelemetryData.status)}`}
            >
              <Thermometer
                className={`h-5 w-5 ${getStatusColor(mockTelemetryData.status)}`}
              />
              <div className="flex-1">
                <span className="text-sm font-semibold text-gray-700">
                  Temperatura Corporal:
                </span>
                <p
                  className={`text-lg font-bold ${getStatusColor(mockTelemetryData.status)}`}
                >
                  {mockTelemetryData.temperature}
                </p>
                <span className="text-xs text-gray-500">
                  Normal: 38.0°C - 39.5°C
                </span>
              </div>
            </div>

            {/* Heart Rate com HeartBeatIcon animado */}
            <div
              className={`flex items-center gap-3 rounded-lg p-3 ${getStatusBg(mockTelemetryData.status)}`}
            >
              <HeartBeatIcon
                className={`${getStatusColor(mockTelemetryData.status)}`}
              />
              <div className="flex-1">
                <span className="text-sm font-semibold text-gray-700">
                  Batimentos Cardíacos:
                </span>
                <p
                  className={`text-lg font-bold ${getStatusColor(mockTelemetryData.status)}`}
                >
                  {mockTelemetryData.heartRate}
                </p>
                <span className="text-xs text-gray-500">Normal: 60-80 bpm</span>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="text-center">
              <div
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium ${getStatusBg(mockTelemetryData.status)} ${getStatusColor(mockTelemetryData.status)}`}
              >
                <div
                  className={`h-2 w-2 rounded-full ${mockTelemetryData.status === "normal" ? "bg-green-600" : mockTelemetryData.status === "alert" ? "bg-orange-600" : "bg-red-600"}`}
                ></div>
                Status:{" "}
                {mockTelemetryData.status === "normal"
                  ? "Normal"
                  : mockTelemetryData.status === "alert"
                    ? "Atenção"
                    : "Crítico"}
              </div>
            </div>

            <div className="border-t pt-3 text-center">
              <span className="text-xs text-gray-500">
                Última atualização: {mockTelemetryData.lastUpdate}
              </span>
            </div>
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-4">
            <div className="rounded-full bg-gray-100 p-4">
              <Activity className="h-8 w-8 text-gray-400" />
            </div>
            <span className="px-4 text-center text-sm text-gray-600">
              Nenhum dado de telemetria disponível
            </span>
            <span className="text-center text-xs text-gray-400">
              Os dados serão exibidos quando um animal for monitorado
            </span>
          </div>
        )}
      </Card>
    </div>
  );
};

export default AnimalTelemetry;
