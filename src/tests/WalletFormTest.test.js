import { screen } from "@testing-library/react";
import React from "react";
import Wallet from "../pages/Wallet";
import { renderWithRouterAndRedux } from "./helpers/renderWith";

describe("Componente Header", () => {
  test("Verifica se tem um elemento que exiba o e-mail da pessoa usuária que fez login, o valor inicial zerado e a Moeda BRL", () => {
    renderWithRouterAndRedux(<Wallet />, {
      initialState: { user: { email: "teste@teste.com" } },
    });

    expect(screen.getByText("teste@teste.com")).toBeDefined();
    expect(screen.getByText("0.00")).toBeDefined();
    expect(screen.getByText("BRL")).toBeDefined();
    
  });
  test("Verifica se tem um formulário para cadastro de despesas", async () => {
    renderWithRouterAndRedux(<Wallet />);

    screen.logTestingPlaygroundURL();
    expect(screen.getByTestId("value-input")).toBeDefined();
    expect(screen.getByTestId("currency-input")).toBeDefined();
    expect(screen.getByTestId("description-input")).toBeDefined();
    expect(screen.getByTestId("method-input")).toBeDefined();
    expect(screen.getByTestId("tag-input")).toBeDefined();
    expect(
      screen.getByRole("button", { name: /adicionar despesa/i })
    ).toBeDefined();
    expect(await screen.findByText("USD")).toBeDefined();
  });
});
