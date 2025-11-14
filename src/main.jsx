import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './components/Root/Root.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Payment from './components/Payment/Payment.jsx';
import Todays from './components/Delivery/Todays.jsx';
import WillToday from './components/Delivery/WillToday.jsx';
import AllDelivery from './components/Delivery/AllDelivery.jsx';
// import Profile from './components/Profile/Profile.jsx';
// import Products from './components/Products/Products.jsx';
// import Advertisement from './components/Advertisement/Advertisement.jsx';
// import Orders from './components/Orders/Orders.jsx';
// import WorkHours from './components/WorkHours/WorkHours.jsx';
// import Store from './components/Store/Store.jsx';
// import StoreList from './components/StoreList/StoreList.jsx'
// import Perfomance from './components/Perfomance/Perfomance.jsx'
// import ActiveAds from './components/ActiveAds/ActiveAds.jsx';
// import ExpireAd from './components/ExpireAd/ExpireAd.jsx'
// import Payments from './components/Payments/Payments.jsx'
// import ShopListing from './components/ShopListing/ShopListing.jsx';
// import ProductDetails from './components/ProductDetails/ProductDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/payment',
        element: <Payment></Payment>
      },
      {
        path: '/toddelivery',
        element: <Todays></Todays>
      },
      {
        path: '/willToday',
        element : <WillToday></WillToday>
      },
      {
        path: '/allDelivery',
        element: <AllDelivery></AllDelivery>
      },
  //     {
  //       path: '/workHours',
  //     element: <WorkHours></WorkHours>
  //     },
  //     {
  //       path: '/store',
  //       element: <Store></Store>
  //     },
  //     {
  //       path: '/storeList',
  //       element: <StoreList></StoreList>
  //     },
  // {
  //   path: '/perfomance',
  //   element: <Perfomance></Perfomance>
  // },
  // {
  //   path: '/activeAds',
  //   element: <ActiveAds></ActiveAds>
  // },
  // {
  //   path: '/expireAds',
  //   element: <ExpireAd></ExpireAd>
  // }
  // ,
  // {
  //   path: '/payments',
  //   element: <Payments></Payments>
  // },
  // {
  //   path: '/shopListing',
  //   element: <ShopListing></ShopListing>
  // },
  // {
  //   path: '/productDetails',
  //   element: <ProductDetails></ProductDetails>
  // }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
