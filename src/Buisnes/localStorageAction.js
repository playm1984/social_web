const USERS = "users";

export const localStorageAction = {
  AUTH_USER: "auth_user",

  getDataLocalStorage(key) {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  },

  setDataLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  editUserProfile(profile) {
    const profileID = profile.id;

    const users = this.getDataLocalStorage(USERS);

    const updateUsers = users.map((user) => {
      if (user.id === profileID) {
        return profile;
      } else {
        return user;
      }
    });

    this.setDataLocalStorage(USERS, updateUsers);
  },
};
