import React from "react";
import { Helmet } from "react-helmet-async";
import ErrorState from "../common/ErrorState";
import LoadingState from "../common/LoadingState";
import MainLayout from "./MainLayout";

/**
 * Container padrão para páginas da aplicação
 */
function PageContainer({
  title,
  description,
  loading = false,
  error = null,
  onRetry,
  children,
  className = "min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a]",
  contentClassName = "mb-6 mt-6 space-y-6 md:mt-8 lg:mt-10",
}) {
  if (loading) {
    return (
      <>
        <Helmet>
          <title>Moovox | {title}</title>
          <meta name="description" content={description} />
        </Helmet>
        <MainLayout title={title} className={className}>
          <LoadingState message={`Carregando ${title.toLowerCase()}...`} />
        </MainLayout>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Helmet>
          <title>Moovox | {title}</title>
          <meta name="description" content={description} />
        </Helmet>
        <MainLayout title={title} className={className}>
          <ErrorState
            title={`Erro ao carregar ${title.toLowerCase()}`}
            message={error}
            onRetry={onRetry}
          />
        </MainLayout>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Moovox | {title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <MainLayout title={title} className={className}>
        <div className={contentClassName}>{children}</div>
      </MainLayout>
    </>
  );
}

export default PageContainer;
