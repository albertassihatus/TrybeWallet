import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "../App";
import { renderWithRouterAndRedux } from "./helpers/renderWith";

describe("testes do primeiro requisito", () => {
  test("verifica se o login tem os inputs e botões", () => {
    renderWithRouterAndRedux(<App />);
    expect(screen.getByTestId("email-input")).toBeInTheDocument();
    expect(screen.getByTestId("password-input")).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /entrar/i,
      })
    ).toBeInTheDocument();
  });
  test("verifica se o botão habilita quando colocado email e senha e vai para a /carteira", () => {
    const {history} = renderWithRouterAndRedux(<App />);
    const buttonLogin = screen.getByRole("button", {
      name: /entrar/i,
    });
    const emailInput = screen.getByTestId("email-input");
    expect(buttonLogin).toBeDisabled();
    const passwordInput = screen.getByTestId("password-input");
    userEvent.type(emailInput, "teste@teste.com");
    userEvent.type(passwordInput, "123456");
    expect(buttonLogin).not.toBeDisabled();
    userEvent.click(buttonLogin)
    expect(history.location.pathname).toBe('/carteira')
  });
});