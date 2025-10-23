import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  latarBelakang: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  lapisan: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'flex-end',
    padding: 25,
  },
  teksBesar: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  teksKecil: {
    fontSize: 16,
    color: '#E0E0E0',
    lineHeight: 24,
    marginBottom: 30,
  },
  tombolMulai: {
    backgroundColor: '#00C49A',
    borderRadius: 30,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: 40,
  },
  teksTombol: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

const pageSatu = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D&auto=format&fit=crop&w=2070&q=80',
      }}
      style={styles.latarBelakang}
    >
      <SafeAreaView style={styles.lapisan}>
        <View>
          <Text style={styles.teksBesar}>Your Next Adventure Starts Here</Text>
          <Text style={styles.teksKecil}>
            Life's too short to stay in one place. Find your next favorite city,
            beach, or mountain and let's get moving!
          </Text>
          <TouchableOpacity style={styles.tombolMulai}>
            <Text style={styles.teksTombol}>Start Exploring</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default pageSatu;
