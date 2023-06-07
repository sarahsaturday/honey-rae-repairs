import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const CustomerDetails = () => {
  const { customerId } = useParams();
  const [customer, updateCustomer] = useState();

  useEffect(() => {
    fetch(
      `http://localhost:8088/customers?_expand=user&_embed=userId=${customerId}`
    )
      .then((response) => response.json())
      .then((data) => {
        const singleCustomer = data[0];
        updateCustomer(singleCustomer);
      });
  }, [customerId]);

  return (
    <section className="customer">
      <header className="customer_header">
        {customer?.user?.fullName || "Missing"}
      </header>
      <div>Email: {customer?.user?.email || "Missing"}</div>
      <div>Address: {customer?.address || "Missing"}</div>
      <div>Phone: {customer?.phoneNumber || "Missing"}</div>
    </section>
  );
};
