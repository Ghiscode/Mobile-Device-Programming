import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  areaAman: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  wadahUtama: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  wadahScroll: {
    flex: 1,
  },
  gambarHeader: {
    width: '100%',
    height: 450,
  },
  lapisanHeader: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  navAtas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  tombolKembali: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 15,
    padding: 10,
  },
  infoCuaca: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  teksCuaca: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  infoBawahHeader: {
    marginBottom: 40,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 15,
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  teksRating: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  judulTempat: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  deskripsiTempat: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 10,
    lineHeight: 24,
  },
  konten: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    padding: 20,
  },
  infoNegara: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  teksNegara: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  judulBagian: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 15,
  },
  kartuUlasan: {
    backgroundColor: '#FDF8F3',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
  },
  headerUlasan: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarUlasan: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  namaUlasan: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  teksUlasan: {
    fontSize: 14,
    color: '#555',
    marginTop: 10,
    lineHeight: 20,
  },
  wadahTombolLihat: {
    position: 'relative',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tombolLihatSemua: {
    backgroundColor: '#F0F0F0',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 40,
    zIndex: 10,
  },
  teksLihatSemua: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  avatarPudar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    position: 'absolute',
    left: '25%',
    opacity: 0.5,
    zIndex: 1,
  },
  kartuRekomendasi: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C3E50',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
  },
  gambarRekomendasi: {
    width: 80,
    height: 80,
    borderRadius: 15,
  },
  infoRekomendasi: {
    marginLeft: 15,
    flex: 1,
  },
  judulRekomendasi: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  deskripsiRekomendasi: {
    fontSize: 14,
    color: '#AAAAAA',
    marginTop: 8,
  },
  navBawah: {
    backgroundColor: '#2C3E50',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    paddingBottom: 30,
  },
  barisAtasNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  kontrolJumlah: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tombolJumlah: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tombolPlus: {
    backgroundColor: '#FF6B3C',
  },
  tombolMinus: {
    backgroundColor: '#4E5A69',
  },
  teksJumlah: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginHorizontal: 15,
  },
  totalHarga: {
    alignItems: 'flex-end',
  },
  labelTotal: {
    fontSize: 14,
    color: '#AAAAAA',
  },
  teksHarga: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  tombolPesan: {
    backgroundColor: '#FF6B3C',
    borderRadius: 20,
    padding: 18,
    alignItems: 'center',
  },
  teksTombolPesan: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

const pageTiga = () => {
  return (
    <SafeAreaView style={styles.areaAman}>
      <View style={styles.wadahUtama}>
        <ScrollView style={styles.wadahScroll}>
          <ImageBackground
            source={{
              uri: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
            }}
            style={styles.gambarHeader}
          >
            <View style={styles.lapisanHeader}>
              <View style={styles.navAtas}>
                <TouchableOpacity style={styles.tombolKembali}>
                  <Icon name="arrow-back" size={24} color="#FFFFFF" />
                </TouchableOpacity>
                <View style={styles.infoCuaca}>
                  <Icon name="sunny" size={24} color="#FFD700" />
                  <Text style={styles.teksCuaca}>24° C</Text>
                </View>
              </View>

              <View style={styles.infoBawahHeader}>
                <View style={styles.rating}>
                  <Icon name="star" size={16} color="#FFD700" />
                  <Text style={styles.teksRating}>5.0</Text>
                </View>
                <Text style={styles.judulTempat}>Labuan Bajo</Text>
                <Text style={styles.deskripsiTempat}>
                  From crystal-clear waters to breathtaking sunsets, Labuan Bajo
                  is calling! Explore hidden islands, swim with manta rays, and
                  create memories that last a lifetime
                </Text>
              </View>
            </View>
          </ImageBackground>

          <View style={styles.konten}>
            <View style={styles.infoNegara}>
              <Text style={{ fontSize: 24 }}>🇮🇩</Text>
              <Text style={styles.teksNegara}>Indonesia</Text>
            </View>

            <Text style={styles.judulBagian}>
              Discover the Beauty of Labuan Bajo
            </Text>

            <View style={styles.kartuUlasan}>
              <View style={styles.headerUlasan}>
                <Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
                  }}
                  style={styles.avatarUlasan}
                />
                <Text style={styles.namaUlasan}>By Rifqi starboy</Text>
              </View>
              <Text style={styles.teksUlasan}>
                Wow amazing yahh, best experience in my life very very worth it
                i like it! Very good very well
              </Text>
            </View>

            <View style={styles.wadahTombolLihat}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
                }}
                style={styles.avatarPudar}
              />
              <TouchableOpacity style={styles.tombolLihatSemua}>
                <Text style={styles.teksLihatSemua}>View All</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.judulBagian}>Recomendation in Bajo</Text>

            <View style={styles.kartuRekomendasi}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1560200305-add0100c6d3a?auto=format&fit=crop&w=200&q=80',
                }}
                style={styles.gambarRekomendasi}
              />
              <View style={styles.infoRekomendasi}>
                <Text style={styles.judulRekomendasi}>
                  Phinisi Luxury Private Trip
                </Text>
                <Text style={styles.deskripsiRekomendasi}>
                  <Icon name="ellipse" size={8} color="#555" /> Complimentary
                  pick-up
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={styles.navBawah}>
          <View style={styles.barisAtasNav}>
            <View style={styles.kontrolJumlah}>
              <TouchableOpacity
                style={[styles.tombolJumlah, styles.tombolPlus]}
              >
                <Icon name="add" size={24} color="#FFFFFF" />
              </TouchableOpacity>
              <Text style={styles.teksJumlah}>1</Text>
              <TouchableOpacity
                style={[styles.tombolJumlah, styles.tombolMinus]}
              >
                <Icon name="remove" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
            <View style={styles.totalHarga}>
              <Text style={styles.labelTotal}>Total Amount</Text>
              <Text style={styles.teksHarga}>$10.000</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.tombolPesan}>
            <Text style={styles.teksTombolPesan}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default pageTiga;
