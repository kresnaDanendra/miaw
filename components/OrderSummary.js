import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderSummary = ({ totalCount }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Ringkasan Pesanan</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Total Item Dipesan:</Text>
        <Text style={styles.badgeCount}>{totalCount}</Text>
      </View>

      {totalCount >= 5 && (
        <View style={styles.promoBox}>
          <Text style={styles.promoText}>
            🎉 Selamat! Anda Mendapatkan Diskon 10%
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF8F0',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#372e20',
    marginBottom: 20,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5D4037',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 14,
    color: '#4E342E',
  },
  badgeCount: {
    backgroundColor: '#462c24',
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 14,
  },
  promoBox: {
    marginTop: 12,
    backgroundColor: '#E8F5E9',
    padding: 10,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#2E7D32',
  },
  promoText: {
    color: '#1B5E20',
    fontWeight: '600',
    fontSize: 13,
  },
});

export default OrderSummary;