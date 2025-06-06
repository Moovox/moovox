import { motion } from "framer-motion";
import { AlertTriangle, BarChart3, Stethoscope, Users } from "lucide-react";
import Card from "../../ui/card";

const DashboardStats = ({ stats }) => {
  const cardAnimation = {
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  };

  const mainCards = [
    {
      variant: "terra",
      icon: <Users className="h-8 w-8 text-black" />,
      title: "Users",
      value: stats.usuarios.toString(),
    },
    {
      variant: "verde",
      icon: <BarChart3 className="h-8 w-8 text-black" />,
      title: "Registered Animals",
      value: stats.animais.toString(),
    },
    {
      variant: "palha",
      icon: <Stethoscope className="h-8 w-8 text-black" />,
      title: "Pending Doses",
      value: stats.dosesPendentes.toString(),
    },
    {
      variant: "alerta",
      icon: <AlertTriangle className="h-8 w-8 text-black" />,
      title: "Health Alerts",
      value: stats.alertas.toString(),
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 overflow-visible sm:grid-cols-2 sm:gap-4 md:grid-cols-4 md:gap-6">
      {mainCards.map((card) => (
        <motion.div
          key={card.title}
          whileHover={cardAnimation.hover}
          whileTap={cardAnimation.tap}
          className="h-full"
        >
          <Card
            variant={card.variant}
            icon={card.icon}
            title={card.title}
            value={card.value}
            className="h-full transform-gpu text-center sm:text-left"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default DashboardStats;
