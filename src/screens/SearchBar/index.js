import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

export default function SearchBar() {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <Text style={styles.title}>Pesquise o nome da sua receita</Text>
            </View>
        </View>
    )
}