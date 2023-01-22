import { FC, useRef, useEffect } from 'react';
import { fetchMicroFrontend } from '../utils/fetchExternalModule';

export type MicroFrontendContainerProps = {
  /** マイクロフロントエンドのパス */
  endpoint: string;
};

export const MicroFrontendContainer: FC<MicroFrontendContainerProps> = (
  props
) => {
  const elRootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log('mount');
    let isAlreadyUnmount = false;
    let unmountMicroFrontend: (() => void) | null;
    fetchMicroFrontend(props.endpoint).then((microFrontend) => {
      if (isAlreadyUnmount) {
        return;
      }
      unmountMicroFrontend =
        elRootRef.current && microFrontend.mount(elRootRef.current);
    });

    return () => {
      console.log('unmount');
      isAlreadyUnmount = true;
      unmountMicroFrontend && unmountMicroFrontend();
    };
  }, []);

  return <div ref={elRootRef} />;
};
