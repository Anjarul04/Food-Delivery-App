import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import ContactUs from './components/ContactUs';
import ErrHandler from './components/ErrHandler.js';
import RestaurantMenu from './components/RestaurantMenu';
import Footer from './components/Footer.js';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';
import Cart from './components/Cart.js';


const AppLayout = () => {
  return (
    <div className='app'>
      <Provider store={appStore}>
      <Header /> 
      <Outlet />
      {/* Outlet is used to render child routes */}
      <Footer/>
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path:'/contact',
        element:<ContactUs/>,
      },
      {
        path:'/cart',
        element:<Cart/>,
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />,
      },
    ],
    errorElement : <ErrHandler />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
