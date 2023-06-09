// HIGHER ORDER COMPONENT

import React from 'react';
import { Outlet, Route, Routes } from "react-router-dom"
import { TicketList } from "../tickets/TicketList"
import { TicketForm } from '../tickets/TicketForm';
import { TicketSearch } from '../tickets/TicketSearch';
import { TicketContainer } from '../tickets/TicketContainer';
import { EmployeeList } from '../employees/EmployeeList';
import { EmployeeDetails } from '../employees/EmployeeDetails';
import { CustomerList } from '../customers/CustomerList';
import { CustomerDetails } from '../customers/CustomerDetails';

export const EmployeeViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Honey Rae Repair Shop</h1>
                    <div>Your one-stop-shop to get all your electronics fixed</div>

                    <Outlet />
                </>
            }>

                <Route path="tickets" element={<TicketContainer />} />
                <Route path="employees" element={<EmployeeList />} />
                <Route path="employees/:employeeId" element={<EmployeeDetails />} />
                <Route path="customers" element={<CustomerList />} />
                <Route path="customers/:customerId" element={<CustomerDetails />} />

            </Route>
        </Routes>
    )
}