import React from 'react';

import ThemeLayer from '../layers/ThemeLayer';

import Button from './Button';

const components = {
  Button
};

type IComponentsThemed = {
  [p in keyof typeof components]: (props: any) => JSX.Element;
};

const componentsThemed: IComponentsThemed = Object.entries(
  components
).reduce<IComponentsThemed>(
  (acc, [key, Component]) => ({
    [key]: (props: any) => (
      <ThemeLayer>
        <Component {...props} />
      </ThemeLayer>
    ),
    ...acc
  }),
  {} as IComponentsThemed
);

export default componentsThemed;
