import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  wadahScroll: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  judulheader: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
  },
  loveatas: {
    position: 'relative',
  },
  lovecard: {
    position: 'absolute',
    top: -5,
    right: -8,
    backgroundColor: '#FF6B3C',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  teksHati: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  isiKonten: {
    paddingHorizontal: 20,
  },
  cardAtas: {
    backgroundColor: '#FF6B3C',
    borderRadius: 20,
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  teksCardAtas: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    flex: 1,
  },
  tandaPanah: {
    backgroundColor: '#FFA07A',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bagianCari: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  bilahCari: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    paddingHorizontal: 15,
    height: 50,
  },
  tombolFilter: {
    backgroundColor: '#2C3E50',
    borderRadius: 15,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  HeaderPopuler: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  judulBagian: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  lihatSemua: {
    fontSize: 14,
    color: '#FF6B3C',
    fontWeight: '500',
  },
  card: {
    marginHorizontal: 20,
    marginBottom: 20,
    height: 250,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  hatiImage: {
    alignSelf: 'flex-end',
    margin: 15,
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 5,
    borderRadius: 20,
  },
  lapisanTeks: {
    padding: 15,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  barisTeks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  wadahTeks: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teksKecil: {
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 5,
  },
  titleCard: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  hargaTempat: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  navBawah: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#2C3E50',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 10,
  },
  tombolNav: {
    alignItems: 'center',
  },
  ikonNavAktif: {
    color: '#FFFFFF',
  },
  ikonNav: {
    color: '#888888',
  },
});

const tempatPopuler = [
  {
    id: '1',
    tempat: 'Labuan Bajo',
    negara: 'Indonesia',
    gambar:
      'https://i.pinimg.com/236x/1e/1c/f3/1e1cf3550944790c49efde15ce95daa4.jpg',
    rating: 5.0,
    harga: '$4.000/pax',
  },
  {
    id: '2',
    tempat: 'Bali',
    negara: 'Indonesia',
    gambar:
      'https://i.pinimg.com/236x/e4/60/eb/e460ebafb5ef84979ea24f8d7acc5350.jpg',
    rating: 4.7,
    harga: '$3.000/pax',
  },
];

const pageDua = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.wadahScroll}>
        <View style={styles.header}>
          <Text style={styles.judulheader}>Hi, Mughis</Text>
          <TouchableOpacity style={styles.loveatas}>
            <Icon name="heart" size={30} color="#FF6B3C" />
            <View style={styles.lovecard}>
              <Text style={styles.teksHati}>8</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.isiKonten}>
          <TouchableOpacity style={styles.cardAtas}>
            <Text style={styles.teksCardAtas}>Rencanakan Liburanmu</Text>
            <View style={styles.tandaPanah}>
              <Icon name="arrow-forward" size={20} color="#FFFFFF" />
            </View>
          </TouchableOpacity>

          <View style={styles.bagianCari}>
            <View style={styles.bilahCari}>
              <Icon
                name="search"
                size={20}
                color="#9CA3AF"
                style={{ marginRight: 10 }}
              />
              <TextInput
                placeholder="Cari destinasi"
                placeholderTextColor="#888"
                style={{ flex: 1, fontSize: 16 }}
              />
            </View>
            <TouchableOpacity style={styles.tombolFilter}>
              <Icon name="options" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <View style={styles.HeaderPopuler}>
            <Text style={styles.judulBagian}>Tempat Populer</Text>
            <TouchableOpacity>
              <Text style={styles.lihatSemua}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.card}>
          <ImageBackground
            source={{ uri: tempatPopuler[0].gambar }}
            style={styles.cardImage}
            imageStyle={{ borderRadius: 20 }}
          >
            <TouchableOpacity style={styles.hatiImage}>
              <Icon name="heart-outline" size={24} color="#FFFFFF" />
            </TouchableOpacity>

            <View style={styles.lapisanTeks}>
              <View style={styles.barisTeks}>
                <View style={styles.wadahTeks}>
                  <Icon name="location-sharp" size={16} color="#FFFFFF" />
                  <Text style={styles.teksKecil}>
                    {tempatPopuler[0].negara}
                  </Text>
                </View>
                <View style={styles.wadahTeks}>
                  <Icon name="star" size={16} color="#FFD700" />
                  <Text style={styles.teksKecil}>
                    {tempatPopuler[0].rating}
                  </Text>
                </View>
              </View>
              <View style={styles.barisTeks}>
                <Text style={styles.titleCard}>{tempatPopuler[0].tempat}</Text>
                <Text style={styles.hargaTempat}>{tempatPopuler[0].harga}</Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <ImageBackground
            source={{ uri: tempatPopuler[1].gambar }}
            style={styles.cardImage}
            imageStyle={{ borderRadius: 20 }}
          >
            <TouchableOpacity style={styles.hatiImage}>
              <Icon name="heart-outline" size={24} color="#FFFFFF" />
            </TouchableOpacity>

            <View style={styles.lapisanTeks}>
              <View style={styles.barisTeks}>
                <View style={styles.wadahTeks}>
                  <Icon name="location-sharp" size={16} color="#FFFFFF" />
                  <Text style={styles.teksKecil}>
                    {tempatPopuler[1].negara}
                  </Text>
                </View>
                <View style={styles.wadahTeks}>
                  <Icon name="star" size={16} color="#FFD700" />
                  <Text style={styles.teksKecil}>
                    {tempatPopuler[1].rating}
                  </Text>
                </View>
              </View>
              <View style={styles.barisTeks}>
                {tempatPopuler[1].tempat && (
                  <Text style={styles.titleCard}>
                    {tempatPopuler[1].tempat}
                  </Text>
                )}
                {tempatPopuler[1].harga && (
                  <Text style={styles.hargaTempat}>
                    {tempatPopuler[1].harga}
                  </Text>
                )}
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.navBawah}>
        <TouchableOpacity style={styles.tombolNav}>
          <Icon name="home" size={26} style={styles.ikonNavAktif} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tombolNav}>
          <Icon name="git-compare-outline" size={26} style={styles.ikonNav} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tombolNav}>
          <Icon name="person-outline" size={26} style={styles.ikonNav} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default pageDua;
