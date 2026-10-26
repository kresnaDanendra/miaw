import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import OrderSummary from './components/OrderSummary';
import MenuItem from './components/MenuItem';

const DAFTAR_MENU = [
  { id: '1', nama: 'Matcha Paw Latte', harga: 35000 },
  { id: '2', nama: 'Chocolate Paw', harga: 26000 },
  { id: '3', nama: 'Croissant', harga: 33000 },
  { id: '4', nama: 'Biscuit Choco miaw', harga: 10000 },
  { id: '5', nama: 'Sandwich Tuna Wiskas', harga: 18000 },
];

export default function App() {
  const [totalPesanan, setTotalPesanan] = useState(0);

  const handleTambahTotal = () => {
    setTotalPesanan((prevTotal) => prevTotal + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.emoji}>🐱</Text>
          <Text style={styles.headerTitle}>Black Miaw Cafe</Text>
          <Text style={styles.headerSubtitle}>Katalog Menu & Pemesanan</Text>
        </View>

        <OrderSummary totalCount={totalPesanan} />

        <Text style={styles.sectionTitle}>Pilihan Menu</Text>

        {DAFTAR_MENU.map((item) => (
          <MenuItem
            key={item.id}
            nama={item.nama}
            harga={item.harga}
            onTambahPesanan={handleTambahTotal}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF8F5',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    backgroundColor: '#412f20',
    padding: 22,
    borderRadius: 20,
    marginBottom: 22,
    alignItems: 'center',
  },
  emoji: {
    fontSize: 34,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e8dbd6',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#c6b3ac',
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3E2723',
    marginBottom: 12,
  },
});