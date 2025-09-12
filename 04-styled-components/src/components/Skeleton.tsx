import React from "react";
import styled, { keyframes } from "styled-components";

interface SkeletonProps {
  "aria-label"?: string;
}

const shimmer = keyframes`
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const Card = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadow.card};
  padding: ${({ theme }) => theme.space[4]};
`;

const Block = styled.div<{ $h?: number; $w?: string }>`
  height: ${({ $h }) => ($h ? `${$h}px` : "14px")};
  width: ${({ $w }) => $w || "100%"};
  border-radius: ${({ theme }) => theme.radius.sm};
  background-image: linear-gradient(
    90deg,
    rgba(255,255,255,0),
    rgba(255,255,255,.12),
    rgba(255,255,255,0)
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.2s linear infinite;

  /* Dark mode contraste */
  @media (prefers-color-scheme: dark) {
    background-image: linear-gradient(
      90deg,
      rgba(0,0,0,0),
      rgba(0,0,0,.25),
      rgba(0,0,0,0)
    );
  }
`;

const Img = styled(Block)`
  aspect-ratio: 1 / 1;
`;

export const Skeleton: React.FC<SkeletonProps> = (props) => {
  return (
    <Card aria-hidden="true" {...props}>
      <Img />
      <Block style={{ marginTop: 12 }} />
      <Block style={{ marginTop: 8 }} $w="60%" />
      <Block style={{ marginTop: 12 }} $h={18} $w="40%" />
      <Block style={{ marginTop: 12 }} $h={38} />
    </Card>
  );
};
