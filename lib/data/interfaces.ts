import { BlogPost } from './blog-interfaces'

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface MusicScore {
  id: string;
  title: string;
  composer: string;
  genre: string;
  price: number;
}

export interface DataProvider {
  // Auth methods
  signUp(email: string, password: string, name: string): Promise<User>;
  signIn(email: string, password: string): Promise<User>;
  signOut(): Promise<void>;
  getCurrentUser(): Promise<User | null>;

  // Music score methods
  getMusicScores(): Promise<MusicScore[]>;
  getMusicScore(id: string): Promise<MusicScore | null>;
  createMusicScore(score: Omit<MusicScore, 'id'>): Promise<MusicScore>;
  updateMusicScore(id: string, score: Partial<MusicScore>): Promise<MusicScore>;
  deleteMusicScore(id: string): Promise<void>;

  // Blog methods
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | null>;
}

