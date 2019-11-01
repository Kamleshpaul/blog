export default function auth({ next, router }) {
    if (!localStorage.getItem(`passport`)) {
      return router.push({ name: `login` });
    }
  
    return next();
  }