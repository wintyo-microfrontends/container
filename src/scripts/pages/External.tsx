import { FC } from 'react';
import { MicroFrontendContainer } from '~/container/MicroFrontend';

export const External: FC = () => {
  return <MicroFrontendContainer endpoint="/external.js" />;
};
