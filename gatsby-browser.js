/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

const React = require("react")

// Ya que layout no se exporta por default se agrega al final de la peticion para poder especificar cual sera la funcion que se importa
const Layout = require("./src/components/layout").default
const { GlobalStyles } = require("./src/styles")
const { CartProvider } = require("./src/context")

exports.wrapRootElement = ({ element }) => (
  <CartProvider>
    <GlobalStyles />
    <Layout>{element}</Layout>
  </CartProvider>
)
