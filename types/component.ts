import React from "react";

export type HeaderType = {
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};
