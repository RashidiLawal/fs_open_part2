import React from "react"
import App from "./App"
import {describe, it, expect} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react'

describe('App', () => {
    it('it renders the App Component', () => {
     const {getByText} = render(<App />)

    //  expect(getByText())
    screen.debug(getByText());
    });
})
