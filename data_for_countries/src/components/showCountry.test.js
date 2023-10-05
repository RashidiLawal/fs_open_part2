import React from "react";
import ShowCountryView from "./index";
import { render, wait } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Api from "../utilities/Api";

jest.mock('../utilities/Api.jsx')

describe("Testing ShowCountryView Component", () => {
  it("checking for country's name", () => {
    const {getByTestId} = render(<ShowCountryView />)
    expect(getByTestId('hodiv')).toBe(false);
  });

  it("checking for country's name", () => {
    const {getByTestId} = render(<ShowCountryView />)
    expect(getByTestId('tesst')).toHaveTextContent('hello');
  });

  it("checking for country's capital", () => {
    const {getByTestId} = render(<ShowCountryView />)
    expect(getByTestId('test')).toHaveTextContent('hillo');
  });

  it("checking for country's area", () => {
    const {getByTestId} = render(<ShowCountryView />)
    expect(getByTestId('testy')).toHaveTextContent('hollo');
  });

  it("checking for country's languages", () => {
    const {getByTestId} = render(<ShowCountryView />)
    expect(getByTestId('languages')).toHaveTextContent('wello');
  });

  it("checking for country's flag", () => {
    const {getByTestId} = render(<ShowCountryView />)
    expect(getByTestId('flatest')).toHaveTextContent('mello');
  });

  it("checking for country's temperature", () => {
    const {getByTestId} = render(<ShowCountryView />)
    expect(getByTestId('wetest')).toHaveTextContent('pillo');
  });

  it("checking for country wether's icon", () => {
     render(<ShowCountryView />)
    const imgElement = screen.getByAltText('weather icon');
    expect(imgElement).toBeInTheDocument();
  });

  it("checking for country name's again", () => {
    const {getByTestId} = render(<ShowCountryView />)
    expect(getByTestId('tesst')).toHaveTextContent('grello');
  });

  it("checking for boolean value after a click", () => {
    const {getByTestId} = render(<ShowCountryView />)
    const  button = getByTestId('button')
    userEvent.click(button)
    expect(getByTestId('hodiv')).toBe(true);
  });

  it("checking for boolean value after second click", () => {
    const {getByTestId} = render(<ShowCountryView />)
    const  button = getByTestId('button')
    userEvent.click(button)
    userEvent.click(button)
    expect(getByTestId('hodiv')).toBe(false);
  });
});
