import { useEffect } from "react";

/**
 * Hook para gerenciar o título da página
 * @param {string} title - Título da página
 * @param {string} description - Descrição da página (opcional)
 */
export function usePageTitle(title, description) {
  useEffect(() => {
    document.title = `Moovox | ${title}`;

    // Atualiza meta description se fornecida
    if (description) {
      const metaDescription = document.querySelector(
        'meta[name="description"]',
      );
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      }
    }
  }, [title, description]);
}
