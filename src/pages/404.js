import * as React from "react"
import { Layout } from "../components/layout"
import { InternalButton } from "../components/button"

const NotFoundPage = () => {
  return (
    <Layout subdomain="hub">
      <h1 className="mt-10">Oops. The dreaded 404.</h1>
      <p>Sorry, this page doesn't exist. The button below takes you back home.</p>
      <InternalButton text='Go home' linkTo="/"/>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
