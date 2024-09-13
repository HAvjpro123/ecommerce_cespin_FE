import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { routes } from './Routers';
import Default from './customer/components/Default/Default';
import { useSelector } from 'react-redux';
import Footer from "./customer/components/Footer/Footer";

function App() {
  const { auth } = useSelector(store => store);

  return (
    <div>
      <div>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const ischeckAuth = !route.isPrivate || auth.user?.role === "admin";
            const Layout = route.isShowHeader ? Default : Fragment;
            return (
              <Route key={route.path} path={ischeckAuth ? route.path : undefined} element={(
                <Layout>
                  <div className="">
                    <Page />
                  </div>
                </Layout>
              )} />
            );
          })}
        </Routes>
      
      </div>
    </div>
  );
}

export default App;
