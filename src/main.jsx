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
import AjkerJoma from './components/BakiKhata/AjkerJoma.jsx';
import GoToProfile from './components/Delivery/GoToProfile.jsx';
import AjJomaDebe from './components/BakiKhata/AjJomaDebe.jsx';
import SobBakiList from './components/BakiKhata/SobBakiList.jsx';


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
      {
        path: '/todayJoma',
      element: <AjkerJoma></AjkerJoma>
      },
      {
        path: '/goToProfile',
        element: <GoToProfile></GoToProfile>
      },
      {
        path: '/ajkeJomaDebe',
        element: <AjJomaDebe></AjJomaDebe>
      },
  {
    path: '/sobBaki',
    element: <SobBakiList></SobBakiList>
  },
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
