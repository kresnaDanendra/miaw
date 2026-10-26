import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MenuItem = ({ nama, harga, onTambahPesanan }) => {
  const [qty, setQty] = useState(0);

  const handlePress = () => {
    setQty((prevQty) => prevQty + 1);
    onTambahPesanan();
  };

  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={styles.nama}>{nama}</Text>
        <Text style={styles.harga}>
          Rp {harga.toLocaleString('id-ID')}
        </Text>
        <Text style={styles.qtyText}>Jumlah Pesanan: {qty}</Text>
      </View>

      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>+ Pesan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#EFEFEF',
    elevation: 2,
  },
  infoContainer: {
    flex: 1,
  },
  nama: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#3E2723',
  },
  harga: {
    fontSize: 13,
    color: '#8D6E63',
    marginVertical: 4,
  },
  qtyText: {
    fontSize: 12,
    color: '#757575',
  },
  button: {
    backgroundColor: '#6D4C41',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
  },
});

export default MenuItem;