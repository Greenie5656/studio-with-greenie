import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AnimatedBackground from './components/AnimatedBackground';
import IsolatedServiceList from './components/IsolatedServiceList';
import PaymentSuccess from './components/PaymentSuccess';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AnimatedBackground />
      <Header />
      <Routes>
        <Route path="/" element={<IsolatedServiceList />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;