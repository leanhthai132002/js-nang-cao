// import Navigo from '../node_modules/navigo';
// import Navigo from 'navigo';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Product from './pages/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetail from './pages/ProductDetail';
import ProductAdd from './pages/ProductAdd';

// Khởi tạo đối tượng router
// const router = new Navigo('/', {linksSelector: 'a'});

import router from './helpers/router';

const render = async (content, id) => {
    document.querySelector('#header').innerHTML = Header.render();
    document.querySelector('#content').innerHTML = await content.render(id);
    document.querySelector('#footer').innerHTML = Footer.render();

    //sau khi content đã render xong thì afterrender mới được chạy
    if (content.afterRender) {
        content.afterRender(id);
    }
}

router.on({
    '/': () => render(Home),
    '/about': () => render(About),
    '/news': () => render(News),
    '/products': () => render(Product),
    '/products/add': () => render(ProductAdd),
    '/products/detail/:id': (data) => render(ProductDetail, data.data.id),
    '/products/edit/:id': (data) => render(ProductAdd, data.data.id)
    
});
router.resolve();

// render();

// --------------------------------


// arrow function: const ten_ham = () => {};
const arrowRender = () => {
    document.querySelector('#header').innerHTML = '<div>Header</div>';
    document.querySelector('#content').innerHTML = '<div>Content</div>';
    document.querySelector('#footer').innerHTML = '<div>Footer</div>';
};
