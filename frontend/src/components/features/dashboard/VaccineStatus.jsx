import { motion } from "framer-motion";
import { Stethoscope } from "lucide-react";
import Card from "../../ui/Card";

const VaccineStatus = ({ dosesMensagem }) => {
  const cardAnimation = {
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  };

  const isEmergency = dosesMensagem.includes("pendente");

  return (
    <motion.div whileHover={cardAnimation.hover} whileTap={cardAnimation.tap}>
      <Card
        variant="rural"
        title="Status das Vacinas"
        icon={<Stethoscope className="h-5 w-5 text-black sm:h-6 sm:w-6" />}
        className="h-[240px] transform-gpu sm:h-[280px]"
      >
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <div
            className={`rounded-full p-4 ${
              isEmergency ? "bg-orange-100" : "bg-green-100"
            }`}
          >
            <Stethoscope
              className={`h-8 w-8 ${
                isEmergency ? "text-orange-600" : "text-green-600"
              }`}
            />
          </div>
          <span
            className={`px-4 text-center font-poppins text-base ${
              isEmergency ? "text-orange-700" : "text-green-700"
            } sm:text-lg`}
          >
            {dosesMensagem}
          </span>
          {isEmergency && (
            <div className="text-center">
              <span className="text-xs text-orange-600">
                Verifique a seção de aplicações para mais detalhes
              </span>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
};

export default VaccineStatus;
