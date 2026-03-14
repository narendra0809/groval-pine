export const getImagePath = (path) => {
  return `${import.meta.env.VITE_SERVER_URI}/storage/${path}`;
};
