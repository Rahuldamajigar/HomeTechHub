import './App.css';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import Navbar from './Pages/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import KitchenApplianceService from './Pages/Kitchen';
import ACService from './Pages/AC';
import ElectricianService from './Pages/Electrician';
import AboutUs from './Pages/About';
import { Toaster } from 'react-hot-toast';
import Footer from './Pages/Footer';
import Contact from './Pages/Contact';
import PlumberService from './Pages/Plumber';
import ROService from './Pages/ROService';
import WashingMachineService from './Pages/WashingMachine';
import ProblemForm from './Pages/ProblemForm';
import ServiceList from './Pages/ServiceList';
import PaymentOptions from './Pages/PaymentOptions';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/kitchen' element={<KitchenApplianceService/>}/>
        <Route path='/AC' element={<ACService/>}/>
        <Route path='/Electrician' element={<ElectricianService/>}/>
        <Route path='/About' element={<AboutUs/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Plumber' element={<PlumberService/>}/>
        <Route path='/Problem' element={<ProblemForm/>}/>
        <Route path='/RORepair' element={<ROService/>}/>
        <Route path='/WashingMachine' element={<WashingMachineService/>}/>
        <Route path='/ServiceList' element={<ServiceList/>}/>
        <Route path='/PaymentOptions' element={<PaymentOptions/>}/>
      </Routes>
      <Toaster />
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
