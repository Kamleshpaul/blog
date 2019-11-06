const auth = (to, from, next) => {

    if (localStorage.getItem(`passport`)) {
  
      return next('/admin');
  
    } else {
  
      return next();
  
    }
  }
  
  export default auth;