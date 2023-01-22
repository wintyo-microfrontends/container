import { FC } from 'react';
import { MicroFrontendContainer } from '~/container/MicroFrontend';

export const ReactApp: FC = () => {
  return (
    <MicroFrontendContainer endpoint="http://localhost:4173/react-app/index.es.js" />
  );
};
