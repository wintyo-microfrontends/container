import { FC, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchMicroFrontend } from '../utils/fetchExternalModule';

export type MicroFrontendContainerProps = {
  /** マイクロフロントエンドのパス */
  endpoint: string;
};

export const MicroFrontendContainer: FC<MicroFrontendContainerProps> = (
  props
) => {
  const elRootRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('mount');
    let isAlreadyUnmount = false;
    let unmountMicroFrontend: (() => void) | null;
    fetchMicroFrontend(props.endpoint).then((microFrontend) => {
      if (isAlreadyUnmount) {
        return;
      }
      unmountMicroFrontend =
        elRootRef.current &&
        microFrontend.mount({
          elRoot: elRootRef.current,
          externalRoute: (path) => {
            console.log('external navigate', path);
            navigate(path);
          },
        });
    });

    return () => {
      console.log('unmount');
      isAlreadyUnmount = true;
      unmountMicroFrontend && unmountMicroFrontend();
    };
  }, []);

  return <div ref={elRootRef} />;
};
