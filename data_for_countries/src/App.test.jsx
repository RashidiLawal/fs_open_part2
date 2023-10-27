import React from "react";
import App from "./App";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Api2nd } from "./utilities/Api";

vi.mock("./utilities/Api.jsx");

describe("App", () => {
  it("form make Api call", async () => {
    Api2nd.getData.mockResolvedValueOnce({ ok: true });
    const { getByTestId } = render(<App />);
    const inputField = getByTestId("input");
    fireEvent.change(inputField, { target: { value: "input value" } });
    expect(Api2nd.getData).toHaveBeenCalledTimes(1);
    expect(Api2nd.getData).toHaveBeenCalledWith("input value ");
    await waitFor(() => null);
  });

  it("it renders the App Component", () => {
    const { getByText } = render(<App />);

    //  expect(getByText())
    screen.debug(getByText());
  });
});
