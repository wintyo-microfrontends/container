type unmount = () => void;

export type MicroFrontend = {
  mount: (elRoot: HTMLElement) => unmount;
};

const checkIsMicroFrontend = (mod: unknown): mod is MicroFrontend => {
  if (typeof mod !== 'object' || mod == null) {
    return false;
  }
  if (!('mount' in mod) || typeof mod.mount !== 'function') {
    return false;
  }
  return true;
};

export const fetchMicroFrontend = async (path: string) => {
  const mod = await import(/* webpackIgnore: true */ path);
  if (!checkIsMicroFrontend(mod)) {
    throw new Error('Unexpected ExternalMicroFrontend');
  }
  console.log(mod);
  return mod;
};
