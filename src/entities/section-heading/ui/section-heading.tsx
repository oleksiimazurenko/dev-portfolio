import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-medium mb-8 text-center">
      {children}
    </h2>
  );
}
