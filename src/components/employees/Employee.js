import { Link } from "react-router-dom";
import React from "react";

export const Employee = ({ id, fullName, email }) => {
    return <section className="employee">
    <div>
        <Link to={`${id}`}>Name: {fullName}</Link>
        </div>
    <div>Email: {email}</div>
</section>
}