import React from "react";
import Countries from "./Countries";
import { render, wait, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from 'vitest'

vi.mock('../utilities/Api.jsx')

describe("Testing Countries Component", () => {
  it("checking for country's name", () => {
    render(<Countries country={{ capital: ['Mogadish'], name: { common: 'Somalia'}} }/>)

    expect(screen.getByTestId('hodiv'));
  });

  it("checking for country's name", () => {
    const {getByTestId} = render(<Countries />)
    expect(getByTestId('tesst')).toHaveTextContent('hello');
  });

  it("checking for country's capital", () => {
    const {getByTestId} = render(<Countries />)
    expect(getByTestId('test')).toHaveTextContent('hillo');
  });

  it("checking for country's area", () => {
    const {getByTestId} = render(<Countries />)
    expect(getByTestId('testy')).toHaveTextContent('hollo');
  });

  it("checking for country's languages", () => {
    const {getByTestId} = render(<Countries />)
    expect(getByTestId('languages')).toHaveTextContent('wello');
  });

  it("checking for country's flag", () => {
    const {getByTestId} = render(<Countries />)
    expect(getByTestId('flatest')).toHaveTextContent('mello');
  });

  it("checking for country's temperature", () => {
    const {getByTestId} = render(<Countries />)
    expect(getByTestId('wetest')).toHaveTextContent('pillo');
  });

  it("checking for country wether's icon", () => {
     render(<Countries />)
    const imgElement = screen.getByAltText('weather icon');
    expect(imgElement).toBeInTheDocument();
  });

  it("checking for country name's again", () => {
    const {getByTestId} = render(<Countries />)
    expect(getByTestId('tesst')).toHaveTextContent('grello');
  });

  it("checking for boolean value after a click", () => {
    const {getByTestId} = render(<Countries />)
    const  button = getByTestId('button')
    userEvent.click(button)
    expect(getByTestId('hodiv')).toBe(true);
  });

  it("checking for boolean value after second click", () => {
    const {getByTestId} = render(<Countries />)
    const  button = getByTestId('button')
    userEvent.click(button)
    userEvent.click(button)
    expect(getByTestId('hodiv')).toBe(false);
  });
});
