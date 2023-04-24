import React from 'react'
import {
  useQuery
} from '@tanstack/react-query'
import { fetchDictionary } from '../../services/getDictionary'

function Dictionary() {

  // Queries
  const { isLoading, isError, data } = useQuery ( // gestion de estados asincronos
    ['words'],
    async () => await fetchDictionary('ok')
)

  return (
    <div>
      {isLoading && <h1>Cargando...</h1>}
      {isError && <h1>Ha ocurrido un error.</h1>}
      {!isLoading && data && data.map((item) => (
        <h1> {item.meanings[0].partOfSpeech} </h1>
      ))}
    </div>
  )
}

export default Dictionary