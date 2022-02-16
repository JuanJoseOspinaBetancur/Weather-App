import React from 'react'
import Weather from './Weather'
import '@testing-library/jest-dom/extend-expect'
import { render,fireEvent  } from '@testing-library/react'

test("Weather render cloud", async () => {
    ///A-rrange A-act A-ssert
    const { findByRole } = render(<Weather tempeture={10}  state="rain"/>)

    const temp = await findByRole("heading")

    //expect(temp).toHaveTextContent('10');
})

