import { motion } from "framer-motion";

const LoadingState = ({ loading, error }) => {
  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex min-h-[200px] w-full items-center justify-center sm:min-h-[300px]"
      >
        <span className="animate-pulse font-poppins text-base text-[#4e2e13] sm:text-lg">
          Carregando dados...
        </span>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex min-h-[200px] w-full items-center justify-center sm:min-h-[300px]"
      >
        <span className="font-poppins text-base text-red-600 sm:text-lg">
          {error}
        </span>
      </motion.div>
    );
  }

  return null;
};

export default LoadingState;
