import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';

export default function ProductCard({ name, price, unit, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.unit}>{unit}</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>{price}</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 170,
    padding: 15,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Colors.border,
    marginRight: 15,
    backgroundColor: 'white',
  },
  image: { width: '100%', height: 80, marginBottom: 15 },
  name: { fontSize: 16, fontWeight: 'bold', color: Colors.dark },
  unit: { fontSize: 14, color: Colors.grey, marginVertical: 5 },
  footer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginTop: 10 
  },
  price: { fontSize: 18, fontWeight: 'bold', color: Colors.dark },
  addButton: {
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 12,
  }
});