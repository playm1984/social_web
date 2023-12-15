import { localStorageAction } from "../Buisnes/localStorageAction";

export const setAuth = () => {
  let isAuth = localStorageAction.getDataLocalStorage(
    localStorageAction.AUTH_USER
  );
  return isAuth;
};
