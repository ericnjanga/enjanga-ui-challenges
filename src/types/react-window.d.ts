// src/types/react-window.d.ts
declare module 'react-window' {
  import * as React from 'react';

  export interface ListProps {
    height: number;
    itemCount: number;
    itemSize: number;
    width: number | string;
    children: (props: { index: number; style: React.CSSProperties }) => React.ReactNode;
  }

  export const List: React.ComponentType<ListProps>;
}
