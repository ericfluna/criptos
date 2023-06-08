import styled from '@emotion/styled'
import React from 'react'

const Contenedor = styled.div`
  color: #fff;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`

const Imagen = styled.img`
  display: block;
  width: 120px;
`

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`

const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`

const Resultado = ({ resultado }) => {
  return (
    <Contenedor>
      <Imagen
        src={`https://cryptocompare.com/${resultado.IMAGEURL}`}
        alt="Imagen cripto"
      />
      <div>
        <Precio>
          El Precio es de: <span>{resultado.PRICE}</span>
        </Precio>
        <Texto>
          Precio más alto del día: <span>{resultado.HIGHDAY}</span>
        </Texto>
        <Texto>
          Precio más bajo del día: <span>{resultado.LOWDAY}</span>
        </Texto>
        <Texto>
          Varicación últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Última Actualización: <span>{resultado.LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  )
}

export default Resultado
