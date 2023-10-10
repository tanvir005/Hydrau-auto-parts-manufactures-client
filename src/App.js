import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddProduct from './Pages/Dashboard/AddProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Purchase from './Pages/Purchase/Purchase';
import MyOrders from './Pages/Dashboard/MyOrders';
import FourOFour from './Pages/Shared/FourOFour';
import AllOrders from './Pages/Dashboard/ManageOrders/AllOrders';
import ManageParts from './Pages/Dashboard/ManageOrders/ManageParts';
import AddReviews from './Pages/Reviews/AddReviews';
import RequireAdmin from './Pages/Login/RequireAdmin';
import ShowReviews from './Pages/Reviews/ShowReviews';
import AllUsers from './Pages/Dashboard/AllUsers';
import AllParts from './Pages/Parts/AllParts';
import { useState } from 'react';
function App() {
  const [isOpenMOdal, setIsModalOpen] = useState(true);
  return (
    <div>
     
      <Navbar className="mx-10"></Navbar>
      <Routes>
      <Route path="/" element={<Home isOpenMOdal={isOpenMOdal} setIsModalOpen={setIsModalOpen}></Home>}></Route>
      <Route path="/parts" element={<AllParts />} />
      <Route path="/purchase/:id" element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
      <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
        <Route index element={<MyProfile></MyProfile>} />
        <Route path="addproduct" element={<RequireAdmin><AddProduct /></RequireAdmin>} />
        <Route path="manageorders" element={<RequireAdmin><AllOrders /> </RequireAdmin>} />
        <Route path="allusers" element={<RequireAdmin><AllUsers /> </RequireAdmin>} />
        <Route path="manageparts" element={<RequireAdmin><ManageParts /></RequireAdmin>} />
        <Route path="myorders" element={<MyOrders />} />
        <Route path="addreview" element={<AddReviews></AddReviews>}> </Route>
      </Route>
      {/* <Route path="/blog" element={<Blog></Blog>}> </Route>
      <Route path="/portfolio" element={<Portfolio/>}> </Route> */}
      <Route path="/reviews" element={<ShowReviews></ShowReviews>}> </Route>
      <Route path="/login" element={<Login></Login>}> </Route>
      <Route path="/signup" element={<Signup></Signup>}> </Route>
      <Route path="*" element={<FourOFour />}> </Route>
    </Routes>
    <ToastContainer />

    </div>
  );
}

export default App;
