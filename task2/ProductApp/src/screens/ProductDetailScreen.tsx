import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Platform } from 'react-native';

export function ProductDetailScreen({ route }: any) {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <Text style={styles.description}>{product.description}</Text>
        
        <View style={styles.platformBox}>
          <Text>Platform: {Platform.OS}</Text>
          <Text>Version: {Platform.Version}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { width: '100%', height: 300 },
  content: { padding: 20 },
  name: { fontSize: 28, fontWeight: 'bold' },
  price: { fontSize: 24, color: '#0066cc', marginVertical: 10 },
  description: { fontSize: 16, lineHeight: 24 },
  platformBox: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 8,
    ...Platform.select({
      ios: { shadowOpacity: 0.1 },
      android: { elevation: 2 }
    })
  }
});