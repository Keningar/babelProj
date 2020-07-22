import { FC } from 'react';

import { AppProps } from 'next/app';
import {
  NextComponentType,
  NextPageContext,
} from 'next/dist/next-server/lib/utils';

export interface FLCDefaultProps {
  title: string | string[];
}

export type GetLayout<P = {}> = (
  component: NextComponentType<NextPageContext, any, P>,
  props: any
) => JSX.Element;

export type FCL<P = {}> = FC<P> & {
  getLayout?(
    component: NextComponentType<NextPageContext, any, P>,
    props: any
  ): JSX.Element;
};

// NEXT JS CUSTOM TYPES

type ComponentLayout<P = {}> = NextComponentType<NextPageContext, any, P> & {
  getLayout?(
    component: NextComponentType<NextPageContext, any, P>,
    props: any
  ): JSX.Element;
};

export type AppPropsLayout = Omit<AppProps, 'Component'> & {
  Component: ComponentLayout;
};
