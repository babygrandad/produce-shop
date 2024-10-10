export const setUser = (user) => {
  user = JSON.stringify(user);
  localStorage.setItem('_SalesAppUser', user, {
    expires: 1, /* expires in 1 day*/
    path: '/',
    secure: false,
    sameSite: 'Strict'
  });
  return true;
};


export const getUser = () => {
  var user = localStorage.getItem('_SalesAppUser');
  return JSON.parse(user);
};

export const removeUser = () => {
	localStorage.removeItem("_SalesAppUser")
}