import React from 'react';

interface SkeletonProps {
  'aria-label'?: string;
}

export const Skeleton: React.FC<SkeletonProps> = (props) => {
  // Estrutura do card sem conteúdo (sem layout shift)
  return (
    <article
      aria-hidden="true"
      {...props}
    >
      <div className="sk-image" />
      <div className="sk-title-line" />
      <div className="sk-title-line short" />
      <div className="sk-price" />
      <div className="sk-actions" />
    </article>
  );
};
