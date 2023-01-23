import { FC } from 'react';
import { MicroFrontendContainer } from '~/container/MicroFrontend';

export const ReactApp: FC = () => {
  return <MicroFrontendContainer endpoint="/react-app/index.es.js" />;
};
