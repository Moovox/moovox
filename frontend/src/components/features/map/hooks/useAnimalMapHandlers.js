/**
 * Custom hook para gerenciar handlers do mapa de animais
 */
export const useAnimalMapHandlers = ({ mapState }) => {
  const { selectAnimal } = mapState;

  // Handle animal marker click
  const handleAnimalClick = (animal) => {
    selectAnimal(animal);
  };

  return {
    handleAnimalClick,
  };
};
