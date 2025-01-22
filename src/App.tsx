import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import DashboardPage from './components/dashboard/DashboardPage';
import ClientPage from './components/client/ClientPage';
import OrdersPage from './components/order/OrdersPage';
import InventoryPage from './components/inventory/InventoryPage';
import SupplierPage from './components/supplier/SupplierPage';
import AttendancePage from './components/employee/AttendancePage';
import PayrollPage from './components/payroll/PayrollPage';
import MachineryPage from './components/machinery/MachineryPage';
import ReportsPage from './components/reports/ReportsPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/clients" element={<ClientPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/supplier" element={<SupplierPage />} />
          <Route path="/employees" element={<AttendancePage />} />
          <Route path="/payroll" element={<PayrollPage />} />
          <Route path="/machinery" element={<MachineryPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;