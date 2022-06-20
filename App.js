import { View } from 'react-native'
import React from 'react'
import TopBar from './src/screens/TopBar'
import Divider from './src/screens/Divider'
import SearchBar from './src/screens/SearchBar'
import CardRecipe from './src/screens/CardRecipe'

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF'}}>
      <TopBar />
      <Divider margin={10} />
      <SearchBar />
      <Divider margin={10} />
      <CardRecipe />
    </View>
  )
}