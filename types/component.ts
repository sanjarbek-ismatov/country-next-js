import React, { ComponentType, ReactElement, ReactNode } from "react";
import type { ParsedUrlQuery } from "querystring";
import { NextPage } from "next";
export type HeaderType = {
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};
export interface Params extends ParsedUrlQuery {
  country?: string;
}
export type Page<P = {}> = NextPage<P> & {
  // You can disable whichever you don't need
  getLayout?: (page: ReactElement) => ReactNode;
  layout?: ComponentType;
};
