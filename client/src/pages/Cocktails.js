import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

export default function Cocktails() {
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  )
}
