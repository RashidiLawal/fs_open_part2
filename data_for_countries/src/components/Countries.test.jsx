import React from "react";
import Countries from "./Countries";
import { render, wait, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, vi } from "vitest";
import "@testing-library/jest-dom";

vi.mock("../utilities/Api.jsx");

describe("Countries", () => {
  describe("when defaultShow is false", () => {
    it("should display the name of the country", () => {
      render(
        <Countries
          defaultShow={false}
          country={{ capital: ["Mogadishu"], name: { common: "Somalia" } }}
        />
      );

      expect(screen.getByText("Somalia")).toBeInTheDocument();
    });

    it("should not display the capital of the country", () => {
      render(
        <Countries
          defaultShow={false}
          country={{ capital: ["Mogadishu"], name: { common: "Somalia" } }}
        />
      );

      expect(screen.queryByText("Mogadishu")).not.toBeInTheDocument();
    });
  });

  describe("when defaultShow is true", () => {
    it("should display the name of the country", () => {
      render(
        <Countries
          defaultShow={true}
          country={{ capital: ["Mogadishu"], name: { common: "Somalia" } }}
        />
      );

      expect(screen.getByText("Somalia")).toBeInTheDocument();
    });

    it("should not display the capital of the country", () => {
      render(
        <Countries
          defaultShow={true}
          country={{ capital: ["Mogadishu"], name: { common: "Somalia" } }}
        />
      );

      expect(screen.queryByText("Mogadishu")).toBeInTheDocument();
    });
  });
});
