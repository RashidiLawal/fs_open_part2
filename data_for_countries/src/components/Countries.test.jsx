import React from "react";
import CountryInformation from "./CountryInformation";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, vi } from "vitest";
import "@testing-library/jest-dom";
import axios from "axios";

vi.mock("axios");

const mockedAxios = vi.mocked(axios);

describe("Countries", () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({
      request: {
        type: "City",
        query: "Mogadishu, Somalia",
        language: "en",
        unit: "m",
      },
      location: {
        name: "Mogadishu",
        country: "Somalia",
        region: "Banaadir",
        lat: "2.067",
        lon: "45.367",
        timezone_id: "Africa/Mogadishu",
        localtime: "2023-10-27 19:51",
        localtime_epoch: 1698436260,
        utc_offset: "3.0",
      },
      current: {
        observation_time: "04:51 PM",
        temperature: 27,
        weather_code: 116,
        weather_icons: [
          "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png",
        ],
        weather_descriptions: ["Partly cloudy"],
        wind_speed: 17,
        wind_degree: 131,
        wind_dir: "SE",
        pressure: 1011,
        precip: 0,
        humidity: 79,
        cloudcover: 29,
        feelslike: 31,
        uv_index: 1,
        visibility: 10,
        is_day: "no",
      },
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("when defaultShow is false", () => {
    it("should display the name of the country", async () => {
      render(
        <CountryInformation
          defaultShow={false}
          country={{ capital: ["Mogadishu"], name: { common: "Somalia" } }}
        />
      );

      expect(await screen.findByText("Somalia")).toBeInTheDocument();
    });

    it("should not display the capital of the country", () => {
      render(
        <CountryInformation
          defaultShow={false}
          country={{ capital: ["Mogadishu"], name: { common: "Somalia" } }}
        />
      );

      expect(screen.queryByText("Mogadishu")).not.toBeInTheDocument();
    });
  });

  describe("when defaultShow is true", () => {
    it("should display the name of the country", async () => {
      render(
        <CountryInformation
          defaultShow={true}
          country={{ capital: ["Mogadishu"], name: { common: "Somalia" } }}
        />
      );

      expect(await screen.findByText("Somalia")).toBeInTheDocument();
    });

    it("should not display the capital of the country", () => {
      render(
        <CountryInformation
          defaultShow={true}
          country={{ capital: ["Mogadishu"], name: { common: "Somalia" } }}
        />
      );

      expect(screen.queryByText("Mogadishu")).toBeInTheDocument();
    });

    it("should not display the capital of the country", async () => {
      render(
        <CountryInformation
          defaultShow={true}
          country={{ capital: ["Mogadishu"], name: { common: "Somalia" } }}
        />
      );

      expect(await screen.findByText("27oC")).toBeInTheDocument();
    });
  });
});
