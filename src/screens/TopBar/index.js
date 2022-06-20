import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'

export default function TopBar() {
  const flag = require('../../assets/imagens/topbar/flag.png')

  return (
    <View style={styles.container}>
      <View style={styles.mainTitle}>
        <Image style={styles.img}
          source={flag} />
        <Text style={styles.title}>Baita chef</Text>
      </View>
    </View>
  )
}

