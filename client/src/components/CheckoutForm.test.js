import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);

    const header = screen.getByText(/form/i);

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);

    fireEvent.change(firstNameInput, {target: {value: 'Shanon'}});
    fireEvent.change(lastNameInput, {target: {value: 'Fritz'}});
    fireEvent.change(addressInput, {target: {value: '327 E Fir Ave'}});
    fireEvent.change(cityInput, {target: {value: 'Fergus Falls'}});
    fireEvent.change(stateInput, {target: {value: 'Minnesota'}});
    fireEvent.change(zipInput, {target: {value: 56537}});

    const checkoutButton = screen.getByText(/checkout/i);

    fireEvent.click(checkoutButton);

    const successMessage = screen.getByText(/you have ordered/i);

    expect(successMessage).toBeInTheDocument();
});
