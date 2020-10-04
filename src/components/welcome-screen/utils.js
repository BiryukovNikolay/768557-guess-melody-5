export const getErrorTextValue = (value) => {
  let mistakeName;
  switch (value) {
    case value = 1:
      mistakeName = `ошибку`;
      break;
    case 0:
    case 2:
    case 3:
    case 4:
      mistakeName = `ошибки`;
      break;
    default:
      mistakeName = `ошибок`;
  }
  return mistakeName;
};
