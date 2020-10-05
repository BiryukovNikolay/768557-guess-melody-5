export const getErrorTextValue = (value) => {
  switch (value) {
    case value = 1:
      return `ошибку`;
    case 2:
    case 3:
    case 4:
      return `ошибки`;
    default:
      return `ошибок`;
  }
};
