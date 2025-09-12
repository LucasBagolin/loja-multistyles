import React from "react";

interface SkeletonProps {
  "aria-label"?: string;
}

export const Skeleton: React.FC<SkeletonProps> = (props) => {
  return (
    <article
      aria-hidden="true"
      {...props}
      className="border border-[var(--border)] rounded-[14px] bg-[var(--surface)] shadow-card dark:shadow-cardDark p-4"
    >
      <div
        className="w-full aspect-square rounded-[10px] animate-shimmer bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/20"
      />
      <div
        className="h-[14px] mt-3 rounded-full animate-shimmer bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/20"
      />
      <div
        className="h-[14px] mt-2 w-[60%] rounded-full animate-shimmer bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/20"
      />
      <div
        className="h-[18px] mt-3 w-[40%] rounded-full animate-shimmer bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/20"
      />
      <div
        className="h-[38px] mt-3 rounded-md animate-shimmer bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/20"
      />
    </article>
  );
};
