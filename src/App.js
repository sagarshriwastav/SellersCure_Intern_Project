import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Registration from './components/services/Registration'
import Cataloging from './components/services/Cataloging';
import PhotoShoots from './components/services/PhotoShoots'
import IncreaseSales from './components/services/IncreaseSales'
import PaymentReconciliation from './components/services/PaymentReconciliation'
import AccountManagement from './components/services/AccountManagement'
import DigitalMarketing from './components/services/DigitalMarketing'
import CrmErpServices from './components/softwareSolutions/CrmErpServices'
import DomainHostingServices from './components/softwareSolutions/DomainHostingServices'
import MobileApp from './components/softwareSolutions/MobileApp'
import WebsiteDesign from './components/softwareSolutions/WebsiteDesign'
import Career from './components/Career'
import Gallery from './components/Gallery'
import AboutUs from './components/AboutUs';



function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>
        </Route>
        <Route path='/registration' element={<Registration />} />
        <Route path='/cataloging' element={<Cataloging />} />
        <Route path='/photoshoots' element={<PhotoShoots />}></Route>
        <Route path='/increasesales' element={<IncreaseSales />}></Route>
        <Route path='/digitalmarketing' element={<DigitalMarketing />}></Route>
        <Route path='/paymentreconciliation' element={<PaymentReconciliation />}></Route>
        <Route path='/accountmanagement' element={<AccountManagement />}></Route>
        <Route path='/webdevlopment' element={<WebsiteDesign />}></Route>
        <Route path='/mobileappdevelopment' element={<MobileApp />}></Route>
        <Route path='/crm' element={<CrmErpServices />}></Route>
        <Route path='/domainhosting' element={<DomainHostingServices />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/career' element={<Career />}></Route>
        <Route path='/aboutus' element={<AboutUs />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
