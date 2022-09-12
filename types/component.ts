import React from "react";
import type { ParsedUrlQuery } from "querystring";
export type HeaderType = {
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};
export interface Params extends ParsedUrlQuery {
  country?: string;
}
