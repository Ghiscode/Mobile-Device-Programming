// File: src/components/SongCard.tsx

import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { Song } from '../api/data';

type Props = {
  song: Song;
  onPress: () => void;
};

export default function SongCard({ song, onPress }: Props) {
  // Ambil data yang diperlukan
  const artistName = song.artist;

  // Teks Play Button (Styling)
  const PlayButton = (
    <View style={styles.playButton}>
      <View style={styles.playIcon} />
    </View>
  );

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      {/* 1. Image/Poster (Menggunakan song.img) */}
      {song.img ? (
        <Image source={{ uri: song.img }} style={styles.poster} />
      ) : (
        <View style={[styles.poster, styles.posterFallback]}>
          <Text style={styles.posterFallbackText}>No Image</Text>
        </View>
      )}

      {/* 2. Info Text */}
      <View style={styles.info}>
        <Text numberOfLines={2} style={styles.title}>
          {song.name}{' '}
        </Text>

        {/* Nama Artis */}
        <Text style={styles.artistName}>{artistName}</Text>

        {/* Score */}
        {song.score !== undefined && (
          <Text style={styles.scoreText}>Score: {song.score}</Text>
        )}
      </View>

      {/* 3. Play Button */}
      {PlayButton}
    </TouchableOpacity>
  );
}

// Style Anda sudah bagus, saya hanya menyesuaikan nama field di atas
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginHorizontal: 12,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  poster: {
    width: 70,
    height: 70,
    borderRadius: 8,
    backgroundColor: '#1f2937',
  },
  posterFallback: { justifyContent: 'center', alignItems: 'center' },
  posterFallbackText: { color: '#9CA3AF', fontSize: 10 },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
  },
  artistName: {
    color: '#555555',
    fontSize: 14,
    marginTop: 2,
  },
  // (Menghapus playlistName style karena datanya tidak ada)
  scoreText: {
    color: '#00bfa5',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
  },
  playButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1c2536',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    width: 0,
    height: 0,
    borderTopWidth: 6,
    borderTopColor: 'transparent',
    borderBottomWidth: 6,
    borderBottomColor: 'transparent',
    borderLeftWidth: 10,
    borderLeftColor: '#ffffff',
    marginLeft: 3,
  },
});
