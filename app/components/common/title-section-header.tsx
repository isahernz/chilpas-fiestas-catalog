import React from "react";

interface TitleSectionHeaderProps {
  title: string;
  subtitle: string;
}

export function TitleSectionHeader({ title, subtitle }: TitleSectionHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-y-1 sm:items-end">
      <h1 className="bg-gradient-to-r from-pink-600 via-blue-600 to-yellow-600 bg-clip-text text-center text-xl leading-none font-bold text-balance text-transparent sm:text-right sm:text-2xl">
        {title}
      </h1>
      <span className="text-sm text-gray-500">{subtitle}</span>
    </div>
  );
}
