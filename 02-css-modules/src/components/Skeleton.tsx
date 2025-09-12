import React from 'react';
import styles from './Skeleton.module.css';

interface SkeletonProps {
  'aria-label'?: string;
}

export const Skeleton: React.FC<SkeletonProps> = (props) => {
  return (
    <article aria-hidden="true" className={styles.card} {...props}>
      <div className={styles.image} />
      <div className={styles.titleLine} />
      <div className={`${styles.titleLine} ${styles.short}`} />
      <div className={styles.price} />
      <div className={styles.actions} />
    </article>
  );
};
