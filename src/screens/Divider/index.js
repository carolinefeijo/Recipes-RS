import { View } from 'react-native'
import React from 'react'

export default function Divider({ margin, marginBottom, marginTop }) {
    return (
        <View style={{ margin: margin }}>
        <View style={{ marginBottom: marginBottom }}>
        <View style={{ marginTop: marginTop }}>
        </View>
        </View>
        </View>

    )
}