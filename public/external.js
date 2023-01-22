export const mount = (elRoot) => {
  console.log('mount external');
  elRoot.textContent = 'External!';

  return () => {
    console.log('unmount external');
  };
};
