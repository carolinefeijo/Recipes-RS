import { View,Image} from 'react-native'
import React from 'react'
import styles from './styles'

export default function CardRecipe() {
  const recipe = require('../../assets/imagens/cardrecipe/recipe.png')
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.mainImg}>
        <Image style={styles.img}
          source={recipe} />
        </View>
      </View>
    </View>
  )
}