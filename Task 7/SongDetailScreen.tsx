// File: src/screens/SongDetailScreen.tsx

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { getSongById, Song } from '../api/data';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'SongDetail'>;

export default function SongDetailScreen({ route }: Props) {
  // Pastikan ID diterima sebagai string (karena kita kirim .toString())
  const { id } = route.params;
  const [song, setSong] = useState<Song | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // Pastikan ID dikirim sebagai string
      const data = await getSongById(id.toString());
      setSong(data);
      setLoading(false);
    })();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
        <Text>Loading detail…</Text>
      </View>
    );
  }

  if (!song) {
    return (
      <View style={styles.center}>
        <Text>Song not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: song.img }} style={styles.cover} />

      <View style={styles.section}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.meta}>{song.artist}</Text>
        <Text style={styles.score}>Score: {song.score}</Text>
        <Text style={styles.deskripsi}>{song.deskripsi}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  container: { paddingBottom: 24 },
  cover: { width: '100%', height: 250, backgroundColor: '#E5E7EB' },
  section: { padding: 16 },
  title: { fontSize: 22, fontWeight: '700', color: '#1F2937' },
  meta: { color: '#1F2937', marginTop: 4, fontSize: 16 },
  score: { color: '#1F2937', fontWeight: '600', marginTop: 8, fontSize: 16 },
  deskripsi: { color: '#1F2937', fontWeight: '600', marginTop: 8, fontSize: 16 },
});
