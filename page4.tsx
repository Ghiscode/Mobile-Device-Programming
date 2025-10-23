import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
// Import library icon
import Icon from 'react-native-vector-icons/Ionicons';


const styles = StyleSheet.create({
  areaAman: {
    flex: 1,
    backgroundColor: '#F8F5F2', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  teksHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  kontenScroll: {
    flex: 1,
  },
  areaLokasi: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  teksLokasiLabel: {
    fontSize: 14,
    color: '#888',
  },
  tombolLokasi: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  teksLokasi: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  scrollChip: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  chip: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  chipAktif: {
    backgroundColor: '#FF6B3C', 
  },
  teksChip: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
  },
  teksChipAktif: {
    color: '#FFFFFF',
  },
  areaTanggal: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  tombolBulan: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  teksBulan: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 8,
  },
  scrollTanggal: {
    flexDirection: 'row',
  },
  kartuTanggal: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 80,
    marginRight: 10,
  },
  kartuTanggalAktif: {
    backgroundColor: '#FF6B3C',
  },
  teksHariTanggal: {
    fontSize: 14,
    color: '#AAA',
    fontWeight: '500',
  },
  teksAngkaTanggal: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  teksTanggalAktif: {
    color: '#FFFFFF',
  },
  teksHasil: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 20,
  },
  areaDaftarTiket: {
    paddingHorizontal: 20,
    paddingBottom: 30, 
  },


  kartuTiketWadah: {
    flexDirection: 'row',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  kartuTiketTab: {
    backgroundColor: '#FF6B3C',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  teksTabTiket: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
    transform: [{ rotate: '-90deg' }],
    width: 80, 
    textAlign: 'center',
  },
  ikonPesawatTab: {
    backgroundColor: 'rgba(0,0,0,0.2)', 
    padding: 8,
    borderRadius: 20,
  },
  kartuTiketKonten: {
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    padding: 20,
    flex: 1, 
  },
  barisKontenTiket: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  teksKodeNegara: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  teksWaktu: {
    fontSize: 14,
    color: '#555',
  },
  garisPemisah: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    borderStyle: 'dashed',
    marginVertical: 15,
  },
  teksKota: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  teksTanggal: {
    fontSize: 12,
    color: '#888',
  },
  teksHarga: {
    position: 'absolute',
    bottom: -10, 
    right: 20,
    backgroundColor: '#E0F7FA', 
    color: '#00796B', 
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: 'bold',
    overflow: 'hidden', 
  },
});

const dates = [
  { dayName: 'S', dayNum: '22', active: false },
  { dayName: 'M', dayNum: '23', active: true },
  { dayName: 'T', dayNum: '24', active: false },
  { dayName: 'W', dayNum: '25', active: false },
  { dayName: 'T', dayNum: '26', active: false },
  { dayName: 'F', dayNum: '27', active: false },
  { dayName: 'S', dayNum: '28', active: false },
];


const tickets = [
  {
    id: '1',
    fromCode: 'NL',
    fromCity: 'Rotterdam',
    fromTime: '5:30pm',
    fromDate: 'Mon, 23 Jun',
    toCode: 'IDN',
    toCity: 'Labuan Bajo',
    toTime: '3:30am',
    toDate: 'Tue, 24 Jun',
    price: '$1,700',
  },
  {
    id: '2',
    fromCode: 'NL',
    fromCity: 'Rotterdam',
    fromTime: '5:30pm',
    fromDate: 'Mon, 23 Jun',
    toCode: 'IDN',
    toCity: 'Labuan Bajo',
    toTime: '3:30am',
    toDate: 'Tue, 24 Jun',
    price: '$1,700',
  },
];


const TicketCard = ({ item }) => {
  return (
    <View style={styles.kartuTiketWadah}>
      <View style={styles.kartuTiketTab}>
        <Text style={styles.teksTabTiket}>AIR LINES</Text>
        <View style={styles.ikonPesawatTab}>
          <Icon name="airplane" size={20} color="#FFFFFF" />
        </View>
      </View>

 
      <View style={styles.kartuTiketKonten}>
        <View style={styles.barisKontenTiket}>
          <View>
            <Text style={styles.teksKodeNegara}>{item.fromCode}</Text>
            <Text style={styles.teksWaktu}>{item.fromTime}</Text>
          </View>
          <Icon name="airplane" size={24} color="#555" />
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.teksKodeNegara}>{item.toCode}</Text>
            <Text style={styles.teksWaktu}>{item.toTime}</Text>
          </View>
        </View>

        <View style={styles.garisPemisah} />

        <View style={styles.barisKontenTiket}>
          <View>
            <Text style={styles.teksKota}>{item.fromCity}</Text>
            <Text style={styles.teksTanggal}>{item.fromDate}</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.teksKota}>{item.toCity}</Text>
            <Text style={styles.teksTanggal}>{item.toDate}</Text>
          </View>
        </View>
        <Text style={styles.teksHarga}>{item.price}</Text>
      </View>
    </View>
  );
};


const pageEmpat = () => {
  return (
    <SafeAreaView style={styles.areaAman}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={26} color="#333" />
        </TouchableOpacity>
        <Text style={styles.teksHeader}>Tickets</Text>
        <TouchableOpacity>
          <Icon name="ellipsis-vertical" size={26} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.kontenScroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.areaLokasi}>
          <Text style={styles.teksLokasiLabel}>Current locations</Text>
          <TouchableOpacity style={styles.tombolLokasi}>
            <Text style={styles.teksLokasi}>Netherlands</Text>
            <Icon name="chevron-down" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollChip}
        >
          <TouchableOpacity style={styles.chip}>
            <Text style={styles.teksChip}>Hotel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.chip, styles.chipAktif]}>
            <Text style={[styles.teksChip, styles.teksChipAktif]}>
              Aircraft
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chip}>
            <Text style={styles.teksChip}>Villa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chip}>
            <Text style={styles.teksChip}>Attraction</Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.areaTanggal}>
          <TouchableOpacity style={styles.tombolBulan}>
            <Text style={styles.teksBulan}>June, 2025</Text>
            <Icon name="chevron-down" size={20} color="#555" />
          </TouchableOpacity>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollTanggal}
          >
            {dates.map((date, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.kartuTanggal,
                  date.active && styles.kartuTanggalAktif, // Style kalo aktif
                ]}
              >
                <Text
                  style={[
                    styles.teksHariTanggal,
                    date.active && styles.teksTanggalAktif,
                  ]}
                >
                  {date.dayName}
                </Text>
                <Text
                  style={[
                    styles.teksAngkaTanggal,
                    date.active && styles.teksTanggalAktif,
                  ]}
                >
                  {date.dayNum}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <Text style={styles.teksHasil}>4 Tickets Found</Text>

        <View style={styles.areaDaftarTiket}>
          {tickets.map(item => (
            <TicketCard item={item} key={item.id} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};



export default pageEmpat;
