const auth = (to, from, next) => {

  if (!localStorage.getItem(`passport`)) {

    next('/admin/login');

  } else {

    return next();

  }
}

export default auth;