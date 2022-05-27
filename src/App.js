import logo from './logo.svg';
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
import Blog from './Pages/Blog/Blog';
import Reviews from './Pages/Reviews/Reviews';
import RequireAdmin from './Pages/Login/RequireAdmin';
function App() {
  return (
    <div className="mx-10">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase/:id" element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
        <Route index element={<MyProfile></MyProfile>} />
        <Route path="addproduct" element={<RequireAdmin><AddProduct /></RequireAdmin>} />
        <Route path="myorders" element={<MyOrders />} />
        <Route path="review" element={<Reviews></Reviews>}> </Route>
        <Route path="manageorders" element={<RequireAdmin><AllOrders /> </RequireAdmin>} />
        <Route path="manageparts/:id" element={<ManageParts />} />
        </Route>
        <Route path="/blog" element={<Blog></Blog>}> </Route>
       
        <Route path="/login" element={<Login></Login>}> </Route>
        <Route path="/signup" element={<Signup></Signup>}> </Route>
        <Route path="*" element={<FourOFour />}> </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
