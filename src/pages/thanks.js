import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"
export default function thanks() {
  return (
    <>
      <SEO title="Compra Exitosa"></SEO>
      <Purchase>
        <h2>Compra Exitosa</h2>
        <p>Espero que disfrutes tu swag. Lucelo con orgullo</p>
        <p>¡Te esperamos de vuelta. ¡Nunca pares de aprender!</p>
        {/* Es necesario agregar el 'rol' y el 'aria-label' para que react permita agregar emojis */}
        <span rol="img" aria-label="emoji">
          💖
        </span>
        <Link to="/">
          <Button>Volver al catálogo</Button>
        </Link>
      </Purchase>
    </>
  )
}
