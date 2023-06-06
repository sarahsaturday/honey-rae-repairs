import React, { useEffect, useState } from "react";
import "./Employees.css";
import { Customer } from "./Customer";

export const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8088/customers`)
      .then(response => response.json())
      .then(customerArray => {
        setCustomers(customerArray);
      });
  }, []);

  return (
    <article className="customers">
      {customers.map(customer => (
        <Customer
          key={`customer--${customer.id}`}
          id={customer.id}
          fullName={customer.fullName}
          address={customer.address}
          phoneNumber={customer.phoneNumber}
        />
      ))}
    </article>
  );
};
