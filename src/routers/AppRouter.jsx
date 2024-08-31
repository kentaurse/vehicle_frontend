import React from 'react';
import {
  Route,
  redirect,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import axios from 'axios';
import { ThemeProvider } from 'src/components/Theme';
import { tokenLogin } from 'src/components/TokenLogin';
import App from 'src/App';
import Public from 'src/routers/Public';
import Private from 'src/routers/Private';
import Error from 'src/components/Error';
import LoginPage from 'src/pages/LoginPage';
import RegisterPage from 'src/pages/RegisterPage';
import DashboardPage from 'src/pages/DashboardPage';
import BillingListPage from 'src/pages/BillingListPage';
import DepartmentProfitPage from 'src/pages/DepartmentProfitPage';
import InvoiceReceiptPage from 'src/pages/InvoiceReceiptPage';
import NewRequestFormPage from 'src/pages/NewRequestFormPage';
import ClampingPage from 'src/pages/ClampingPage';
import InvoicePage from 'src/pages/InvoicePage';
import InvoiceMSPage from 'src/pages/InvoiceMSPage';
import OrderDBPage from 'src/pages/OrderDBPage';
import CalendarPage from 'src/pages/CalendarPage';
import OrderPage from 'src/pages/OrderPage';
import AnalysisPage from 'src/pages/AnalysisPage';
import MailPage from 'src/pages/MailPage';
import StorageContainerPage from 'src/pages/StorageContainerPage';
import InventoryContainerPage from 'src/pages/InventoryContainerPage';
import ReleasePage from 'src/pages/ReleasePage';
import DataPage from 'src/pages/DataPage';
import PartnerCompanyPage from 'src/pages/PartnerCompanyPage';
import CustomerPage from 'src/pages/CustomerPage';
import CustomerListPage from 'src/pages/CustomerListPage';
import PartnerCompanyListPage from 'src/pages/PartnerCompanyListPage';
import DBPage from 'src/pages/DBPage';
import MonthlyCustomerDBGraphPage from 'src/pages/MonthlyCustomerDBGraphPage';
import MonthlyPartnerCompanyDBGraphPage from 'src/pages/MonthlyPartnerCompanyDBGraphPage';
import MonthlyCustomerDBPage from 'src/pages/MonthlyCustomerDBPage';
import MonthlyPartnerCompanyPage from 'src/pages/MonthlyPartnerCompanyPage';
import StorageContainerDBPage from 'src/pages/StorageContainerDBPage';
import DBSPage from 'src/pages/DBSPage';
import RequestListPage from 'src/pages/RequestListPage';
import TaskSchedulePage from 'src/pages/TaskSchedulePage';

axios.defaults.baseURL = process.env.REACT_API_BASE_URL;

const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<App />} errorElement={<Error />}>
          <Route element={<Private />} loader={async () => {
            const tokenData = await tokenLogin();
            return { tokenData };
          }}>
            <Route path="/" loader={() => redirect('/dashboard')} />

            <Route path="/dashboard" loader={() => redirect('/dashboard/overview')} />
            <Route path="/dashboard/overview" element={<DashboardPage />} />
            <Route path="/dashboard/quick" element={<DashboardPage />} />

            <Route path="/orders_invoices" loader={() => redirect('/orders_invoices/orderDB')} />
            <Route path="/orders_invoices/orderDB" element={<OrderDBPage />} />
            <Route path="/orders_invoices/billingList" element={<BillingListPage />} />
            <Route path="/orders_invoices/invoice" element={<InvoicePage />} />
            <Route path="/orders_invoices/invoice_Ms" element={<InvoiceMSPage />} />
            <Route path="/orders_invoices/requestList" element={<RequestListPage />} />
            <Route path="/orders_invoices/newRequestForm" element={<NewRequestFormPage />} />
            <Route path="/orders_invoices/invoice_receipt" element={<InvoiceReceiptPage />} />
            <Route path="/orders_invoices/mail" element={<MailPage />} />

            <Route path="/containers" loader={() => redirect('/containers/storageContainer')} />
            <Route path="/containers/storageContainer" element={<StorageContainerPage />} />
            <Route path="/containers/inventoryContainer" element={<InventoryContainerPage />} />

            <Route path="/calendar_schedules" loader={() => redirect('/calendar_schedules/calendar')} />
            <Route path="/calendar_schedules/calendar" element={<CalendarPage />} />
            <Route path="/calendar_schedules/taskSchedule" element={<TaskSchedulePage />} />

            <Route path="/masterDatas" loader={() => redirect('/masterDatas/customer')} />
            <Route path="/masterDatas/customer" element={<CustomerPage />} />
            <Route path="/masterDatas/partnerCompany" element={<PartnerCompanyPage />} />
            <Route path="/masterDatas/customerList" element={<CustomerListPage />} />
            <Route path="/masterDatas/partnerCompanyList" element={<PartnerCompanyListPage />} />

            <Route path="/analysis_reports" loader={() => redirect('/analysis_reports/monthlyCustomerDBGraph')} />
            <Route path="/analysis_reports/monthlyCustomerDBGraph" element={<MonthlyCustomerDBGraphPage />} />
            <Route path="/analysis_reports/monthlyPartnerCompanyDBGraph" element={<MonthlyPartnerCompanyDBGraphPage />} />
            <Route path="/analysis_reports/db_s" element={<DBSPage />} />
            <Route path="/analysis_reports/monthlyCustomerDB" element={<MonthlyCustomerDBPage />} />
            <Route path="/analysis_reports/storageContainerDB" element={<StorageContainerDBPage />} />
            <Route path="/analysis_reports/monthlyPartnerCompany" element={<MonthlyPartnerCompanyPage />} />
            <Route path="/analysis_reports/departmentProfit" element={<DepartmentProfitPage />} />
            <Route path="/analysis_reports/monthlyDepartmentReport" element={<NewRequestFormPage />} />
            <Route path="/analysis_reports/transportCompanyRequest" element={<NewRequestFormPage />} />

            <Route path="/document_notes" loader={() => redirect('/document_notes/releaseNotes')} />
            <Route path="/document_notes/releaseNotes" element={<NewRequestFormPage />} />
            <Route path="/document_notes/data" element={<NewRequestFormPage />} />
            <Route path="/document_notes/invoices_receipts" element={<NewRequestFormPage />} />

            <Route path="/settings_administration" loader={() => redirect('/settings_administration/userManagements')} />
            <Route path="/settings_administration/userManagements" element={<NewRequestFormPage />} />
            <Route path="/settings_administration/systemSettings" element={<NewRequestFormPage />} />
          </Route>
        </Route>
        <Route element={<Public />} errorElement={<Error />} loader={async () => {
          const tokenData = await tokenLogin();
          return { tokenData };
        }}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        {/* <Route path="*" loader={() => redirect('/login')} /> */}
      </>
    )
  );

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default AppRouter;