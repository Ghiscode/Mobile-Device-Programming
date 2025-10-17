import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 350,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  nilai: {
    color: 'white',
    fontWeight: 'bold',
  },
  suhu: {
    color: 'white',
    fontWeight: 'bold',
  },
  textBox: {
    marginBottom: 40,
  },
  judul: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  deskripsi: {
    color: 'grey',
    fontSize: 16,
    marginTop: 6,
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontWeight: 700,
    fontSize: 20,
    color: 'grey',
    marginBottom: 6,
  },
  desc: {
    fontSize: 16,
    color: 'grey',
    fontStyle: 'italic',
  },
  card: {
    marginRight: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
    width: 150,
  },
  cardImage: {
    width: '100%',
    height: 100,
  },
  cardText: {
    padding: 10,
    fontWeight: '600',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  totalLabel: {
    fontSize: 14,
    color: 'grey',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'Azure',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
  },
});

const App = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ImageBackground
        source={{
          uri: 'https://i.pinimg.com/1200x/2e/86/c0/2e86c01458860984ff69b00df1b29a7e.jpg',
        }}
        style={styles.headerImage}
      >
        <View style={styles.overlay}>
          <View style={styles.topRow}>
            <Text style={styles.nilai}>⭐ 5.0</Text>
            <Text style={styles.suhu}>🌤 24°C</Text>
          </View>
          <View style={styles.textBox}>
            <Text style={styles.judul}>Labuan Bajo</Text>
            <Text style={styles.deskripsi}>
              Berliburlah ke Labuan Bajo untuk Refreshing
            </Text>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Ceritakan pengalamanmu</Text>
        <Text style={styles.desc}>
          Labuan Bajo masih sangat asri. sangat di rekomendasikan!
        </Text>

        <Text style={[styles.sectionTitle, { marginTop: 20 }]}>
          Rekomendasi Tempat Di Labuan Bajo
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.card}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/236x/05/4e/7e/054e7ec3a4c891ac147660de50c5c782.jpg',
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Tempat 1</Text>
          </View>
          <View style={styles.card}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/736x/1e/1c/f3/1e1cf3550944790c49efde15ce95daa4.jpg',
              }}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Tempat 2</Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.totalLabel}>Total Harga</Text>
          <Text style={styles.totalValue}>Rp. 1.000.000</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pesan Sekarang</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default App;
