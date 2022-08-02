import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "../App";
import { renderWithRouterAndRedux } from "./helpers/renderWith";

describe("Login Page Test", () => {
  it("Verifica se os inputs estão sendo carregados na tela", async () => {
    renderWithRouterAndRedux(<App />);

    expect(screen.getByPlaceholderText("E-mail")).toBeDefined();

    expect(screen.getByPlaceholderText("Password")).toBeDefined();

    expect(screen.getByRole("button", { name: /entrar/i })).toBeDefined();
  });

  it("Acessa a página Wallet ao habilitar e clicar no button", async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const btnLogin = screen.getByRole("button", { name: /entrar/i });
    expect(btnLogin).toBeDisabled();

    const emailValue = screen.getByTestId("email-input");
    const passwordValue = screen.getByTestId("password-input");

    userEvent.type(emailValue, "teste@teste.com");
    userEvent.type(passwordValue, "123456");

    
    userEvent.click(btnLogin);
  });
});
