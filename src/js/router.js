import home from "./home";
import products from "./products";
import categories from "./categories";
import about from "./about";
import cart from "./cart";
import erorr404 from "./404";

const routes = {
  '/': {
    title: 'Welcome to our spa store',
    content: home,

  },
  '/Products': {
    title: 'our products ',
    content: products,

  },
   '/Categories': {
    title: 'All categories here',
    content: categories,
  },
  '/About': {
    title: 'Here information about our products',
    content: about,

  },
  '/Cart': {
    title: 'Your products',
    content: cart,
  },
  404: {
    title: 'The page is not found',
    content: erorr404,
  }
}




const handleClick = (e) => {
  e.preventDefault();
  console.log(e.target.pathname);
  if(e.target.pathname !== window.location.pathname) {
    window.history.pushState({}, '', e.target.pathname);
    window.dispatchEvent(new Event('popstate'));
  }
};

const handleRouter = () => {
  const location = window.location.pathname;
  const route = routes[location] ?? routes[404];


  document.querySelector('h1').innerHTML = route.title;
  document.querySelector('#content').innerHTML =route.content();
  document.querySelectorAll('#nav-list .nav-link').forEach((el) =>{
    el.classList.remove('active');
    if(el.pathname ===location) {
      el.classList.add('active');
    }
  })



};
const initRouter = () => {
  handleRouter();
  window.addEventListener('popstate', handleRouter);
  document.querySelectorAll('.nav-link').forEach((el) => {
    el.addEventListener('click', handleClick)
  });

};
export default initRouter
