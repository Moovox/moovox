import React from 'react';
import { Button } from './button';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

function Pagination({
    currentPage,
    totalPages,
    onPageChange,
    className = ""
}) {
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            onPageChange(newPage);
        }
    };

    // Gerar array de números de página com ellipsis
    const getPageNumbers = () => {
        const pages = [];
        const maxPagesToShow = 5;

        if (totalPages <= maxPagesToShow) {
            // Mostrar todas as páginas se forem menos que o máximo
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Sempre mostrar a primeira página
            pages.push(1);

            // Calcular o intervalo ao redor da página atual
            const leftBound = Math.max(2, currentPage - 1);
            const rightBound = Math.min(totalPages - 1, currentPage + 1);

            // Adicionar ellipsis entre primeira página e leftBound, se necessário
            if (leftBound > 2) {
                pages.push('...');
            }

            // Adicionar páginas no intervalo
            for (let i = leftBound; i <= rightBound; i++) {
                pages.push(i);
            }

            // Adicionar ellipsis entre rightBound e última página, se necessário
            if (rightBound < totalPages - 1) {
                pages.push('...');
            }

            // Sempre mostrar a última página
            pages.push(totalPages);
        }

        return pages;
    };

    if (totalPages <= 1) return null;

    return (
        <div className={`flex items-center justify-center gap-1 mt-4 ${className}`}>
            {/* Botão para primeira página */}
            <Button
                variant="outline"
                size="icon"
                className="w-8 h-8 p-0"
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                title="Primeira página"
            >
                <ChevronsLeft className="h-4 w-4" />
            </Button>

            {/* Botão anterior */}
            <Button
                variant="outline"
                size="icon"
                className="w-8 h-8 p-0"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                title="Página anterior"
            >
                <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Números de página */}
            {getPageNumbers().map((page, index) => (
                page === '...' ? (
                    <span key={`ellipsis-${index}`} className="px-2">...</span>
                ) : (
                    <Button
                        key={`page-${page}`}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        className={`w-8 h-8 p-0 ${currentPage === page ? 'bg-amber-700 text-white' : ''}`}
                        onClick={() => handlePageChange(page)}
                    >
                        {page}
                    </Button>
                )
            ))}

            {/* Botão próximo */}
            <Button
                variant="outline"
                size="icon"
                className="w-8 h-8 p-0"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                title="Próxima página"
            >
                <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Botão para última página */}
            <Button
                variant="outline"
                size="icon"
                className="w-8 h-8 p-0"
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                title="Última página"
            >
                <ChevronsRight className="h-4 w-4" />
            </Button>
        </div>
    );
}

export { Pagination }; 