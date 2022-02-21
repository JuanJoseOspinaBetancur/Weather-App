import React from 'react'
import ErrorBoundary from './ErrorBoundary'

export default {
    title: 'ErrorBoundary',
    component: ErrorBoundary
}
const prop = undefined
const ComponentWithoutError = () => <h1>Sin Error</h1>
const ComponentWithError = () => <h1>{prop.hola}</h1>

//export const ErrorBoundaryExample = () => <ErrorBoundary />
export const ErrorBoundaryWithError = () => <ErrorBoundary > <ComponentWithError /> </ErrorBoundary>
export const ErrorBoundaryWithoutError = () => <ErrorBoundary > <ComponentWithoutError /> </ErrorBoundary>