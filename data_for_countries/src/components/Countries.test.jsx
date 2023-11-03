import React from "react";
import CountryInformation from "./CountryInformation";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, vi } from "vitest";
import "@testing-library/jest-dom";
import axios from "axios";

vi.mock("axios");

const mockedAxios = vi.mocked(axios);

const countriesInformation = { capital: ["Mogadishu"], name: { common: "Somalia" } }

const countriesOtherInformation = {
  "name": {
      "common": "Turks and Caicos Islands",
      "official": "Turks and Caicos Islands",
      "nativeName": {
          "eng": {
              "official": "Turks and Caicos Islands",
              "common": "Turks and Caicos Islands"
          }
      }
  },
  "tld": [
      ".tc"
  ],
  "cca2": "TC",
  "ccn3": "796",
  "cca3": "TCA",
  "independent": false,
  "status": "officially-assigned",
  "unMember": false,
  "currencies": {
      "USD": {
          "name": "United States dollar",
          "symbol": "$"
      }
  },
  "idd": {
      "root": "+1",
      "suffixes": [
          "649"
      ]
  },
  "capital": [
      "Cockburn Town"
  ],
  "altSpellings": [
      "TC"
  ],
  "region": "Americas",
  "subregion": "Caribbean",
  "languages": {
      "eng": "English"
  },
  "translations": {
      "ara": {
          "official": "جزر توركس وكايكوس",
          "common": "جزر توركس وكايكوس"
      },
      "bre": {
          "official": "Inizi Turks ha Caicos",
          "common": "Inizi Turks ha Caicos"
      },
      "ces": {
          "official": "Turks a Caicos",
          "common": "Turks a Caicos"
      },
      "cym": {
          "official": "Turks and Caicos Islands",
          "common": "Turks and Caicos Islands"
      },
      "deu": {
          "official": "Turks und Caicos Inseln",
          "common": "Turks-und Caicosinseln"
      },
      "est": {
          "official": "Turksi ja Caicose saared",
          "common": "Turks ja Caicos"
      },
      "fin": {
          "official": "Turks-ja Caicossaaret",
          "common": "Turks-ja Caicossaaret"
      },
      "fra": {
          "official": "Îles Turques et Caïques",
          "common": "Îles Turques-et-Caïques"
      },
      "hrv": {
          "official": "Otoci Turks i Caicos",
          "common": "Otoci Turks i Caicos"
      },
      "hun": {
          "official": "Turks- és Caicos-szigetek",
          "common": "Turks- és Caicos-szigetek"
      },
      "ita": {
          "official": "Turks e Caicos",
          "common": "Isole Turks e Caicos"
      },
      "jpn": {
          "official": "タークス·カイコス諸島",
          "common": "タークス・カイコス諸島"
      },
      "kor": {
          "official": "터크스 케이커스 제도",
          "common": "터크스 케이커스 제도"
      },
      "nld": {
          "official": "Turks-en Caicoseilanden",
          "common": "Turks-en Caicoseilanden"
      },
      "per": {
          "official": "جزایر تورکس و کایکوس",
          "common": "جزایر تورکس و کایکوس"
      },
      "pol": {
          "official": "Turks i Caicos",
          "common": "Turks i Caicos"
      },
      "por": {
          "official": "Ilhas Turks e Caicos",
          "common": "Ilhas Turks e Caicos"
      },
      "rus": {
          "official": "Теркс и Кайкос острова",
          "common": "Теркс и Кайкос"
      },
      "slk": {
          "official": "Ostrovy Turks a Caicos",
          "common": "Turks a Caicos"
      },
      "spa": {
          "official": "Islas Turcas y Caicos",
          "common": "Islas Turks y Caicos"
      },
      "srp": {
          "official": "Острва Теркс и Кејкос",
          "common": "Теркс и Кејкос"
      },
      "swe": {
          "official": "Turks- och Caicosöarna",
          "common": "Turks- och Caicosöarna"
      },
      "tur": {
          "official": "Turks ve Caicos Adaları",
          "common": "Turks ve Caicos Adaları"
      },
      "urd": {
          "official": "جزائر کیکس و ترکیہ",
          "common": "جزائر کیکس و ترکیہ"
      },
      "zho": {
          "official": "特克斯和凯科斯群岛",
          "common": "特克斯和凯科斯群岛"
      }
  },
  "latlng": [
      21.75,
      -71.58333333
  ],
  "landlocked": false,
  "area": 948.0,
  "demonyms": {
      "eng": {
          "f": "Turks and Caicos Islander",
          "m": "Turks and Caicos Islander"
      }
  },
  "flag": "🇹🇨",
  "maps": {
      "googleMaps": "https://goo.gl/maps/R8VUDQfwZiFtvmyn8",
      "openStreetMaps": "https://www.openstreetmap.org/relation/547479"
  },
  "population": 38718,
  "fifa": "TCA",
  "car": {
      "signs": [
          "GB"
      ],
      "side": "left"
  },
  "timezones": [
      "UTC-04:00"
  ],
  "continents": [
      "North America"
  ],
  "flags": {
      "png": "https://flagcdn.com/w320/tc.png",
      "svg": "https://flagcdn.com/tc.svg"
  },
  "coatOfArms": {},
  "startOfWeek": "monday",
  "capitalInfo": {
      "latlng": [
          21.46,
          -71.14
      ]
  },
  "postalCode": {
      "format": "TKCA 1ZZ",
      "regex": "^(TKCA 1ZZ)$"
  }
}

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
          country={countriesInformation}
        />
      );

      expect(await screen.findByText("Somalia")).toBeInTheDocument();
    });

    it("should not display the capital of the country", () => {
      render(
        <CountryInformation
          defaultShow={false}
          country={countriesInformation}
        />
      );

      expect(screen.queryByText("Mogadishu")).not.toBeInTheDocument();
    });

    it("should display the area of the country", () => {
      render(
        <CountryInformation
          defaultShow={false}
          country={{countriesInformation, countriesOtherInformation}}
        />
      );

      expect(screen.queryByText(948.0)).toBeInTheDocument();
    });
  });

  describe("when defaultShow is true", () => {
    it("should display the name of the country", async () => {
      render(
        <CountryInformation
          defaultShow={true}
          country={countriesInformation}
        />
      );

      expect(await screen.findByText("Somalia")).toBeInTheDocument();
    });

    it("should not display the capital of the country", () => {
      render(
        <CountryInformation
          defaultShow={true}
          country={countriesInformation}
        />
      );

      expect(screen.queryByText("Mogadishu")).toBeInTheDocument();
    });

    it("should not display the capital of the country", async () => {
      render(
        <CountryInformation
          defaultShow={true}
          country={countriesInformation}
        />
      );

      expect(await screen.findByText("27oC")).toBeInTheDocument();
    });
  });
});
