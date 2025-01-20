import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ClientPage from './components/client/ClientPage';
import OrdersPage from './components/order/OrdersPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/clients" element={<ClientPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/" element={<ClientPage />} /> {/* Default route */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;