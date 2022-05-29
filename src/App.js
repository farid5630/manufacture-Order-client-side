import './assets/style.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Order from './Pages/Order/Order';
import Blogs from './Pages/Blogs/Blogs';
import Header from './Pages/Shared/Header';
import { ToastContainer } from 'react-toastify';
import Footer from './Pages/Shared/Footer';

function App() {
  return (
    <div>
      
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/order/:id"
          element={
            <RequireAuth>
              <Order></Order>
            </RequireAuth>
          }
        ></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route path="/dashboard/orders" element={<MyOrders />}></Route>
          <Route path="/dashboard/review" element={<AddReview />}></Route>
          <Route path="/dashboard/profile" element={<MyProfile />}></Route>
          
          <Route
            path="/dashboard/manageOrders"
            element={
              <RequireAdmin>
                <ManageOrders />
              </RequireAdmin>
            }
          ></Route>
          {/* <Route path="/dashboard/addProduct" element={<AddProduct />}></Route> */}
          <Route path='/dashboard/addProduct' element={<RequireAdmin><AddProduct/></RequireAdmin>}></Route>
          <Route
            path="/dashboard/makeAdmin"
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="/dashboard/manageProduct"
            element={
              <RequireAdmin>
                <ManageProduct />
              </RequireAdmin>
            }
          ></Route>
        </Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
