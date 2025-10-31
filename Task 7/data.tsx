// Tipe data Film, disesuaikan agar cocok dengan skema MockAPI Anda
export type Film = {
  id: string; // ID yang dihasilkan oleh MockAPI
  title: string;
  original_title: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  image: string; // URL Poster
  movie_banner: string; // URL Banner
};

// Fungsi Mengambil Semua Film
export async function getFilms(): Promise<Film[]> {
  const res = await fetch(
    `https://69033bc8d0f10a340b23474f.mockapi.io/api/v1/movies`,
  );
  if (!res.ok) throw new Error('Failed to fetch films');
  return res.json();
}

// Fungsi Mengambil Film Berdasarkan ID (MENGGUNAKAN BACKTICK)
export async function getFilmById(id: string): Promise<Film> {
  // Perhatikan penggunaan BACKTICK (`) untuk menyisipkan ${id}
  const res = await fetch(
    `https://69033bc8d0f10a340b23474f.mockapi.io/api/v1/movies/${id}`,
  );
  if (!res.ok) throw new Error('Failed to fetch film');
  return res.json();
}

// Tipe data Song, disesuaikan agar lebih konsisten
export type Song = {
  id: string | number; // ID yang dihasilkan oleh MockAPI
  title: string;       // Mengganti 'name' menjadi 'title' agar konsisten dengan film
  artist: string;
  img: string;         // Mengganti 'cover' menjadi 'img' sesuai skema Anda
  score: number;       // Ini adalah Number di MockAPI
  pListId?: string;    // Mengganti 'pl' menjadi 'pListId' (asumsi string)
  name?: string;  
  deskripsi : string;     // Nama playlist
};


// Fungsi Mengambil Semua Lagu
export async function getSongs(): Promise<Song[]> {
  const res = await fetch('https://69033bc8d0f10a340b23474f.mockapi.io/api/v1/songs');
  
  if (!res.ok) {
    throw new Error('Failed to fetch songs from MockAPI!');
  }
  return res.json();
}

// Fungsi Mengambil Lagu Berdasarkan ID (MENGGUNAKAN BACKTICK)
export async function getSongById(id: string): Promise<Song> {
  // Perhatikan penggunaan BACKTICK (`) untuk menyisipkan ${id}
  const res = await fetch(`https://69033bc8d0f10a340b23474f.mockapi.io/api/v1/songs/${id}`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch song!');
  }
  return res.json();
}


