import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"
export default function cancelled() {
  return (
    <>
      <SEO title="Compra Fallida"></SEO>
      <Purchase>
        <h2>No se pudo realizar la compra</h2>
        <p>Lo sentimos. Ocurrio un error durante la transacción</p>
        <small>Vuelve a intentarlo en unos segundos</small>
        <p />
        <p />
        <p />
        <p>Te esperamos de vuelta. ¡Nunca pares de aprender!</p>
        {/* Es necesario agregar el 'role' y el 'aria-label' para que react permita agregar emojis */}
        <span role="img" aria-label="emoji">
          💖
        </span>
        <Link to="/">
          <Button>Volver al catálogo</Button>
        </Link>
      </Purchase>
    </>
  )
}
