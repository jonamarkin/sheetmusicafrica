import { DataProvider, User, MusicScore } from './interfaces'
import { BlogPost } from './blog-interfaces'

const dummyUsers: User[] = [
  { id: '1', email: 'user1@example.com', name: 'User One' },
  { id: '2', email: 'user2@example.com', name: 'User Two' },
]

const dummyMusicScores: MusicScore[] = [
  { id: '1', title: 'African Symphony No. 1', composer: 'Kwame Nkrumah', genre: 'Classical', price: 19.99 },
  { id: '2', title: 'Savanna Rhythms', composer: 'Miriam Makeba', genre: 'Folk', price: 14.99 },
  { id: '3', title: 'Drums of the Serengeti', composer: 'Fela Kuti', genre: 'Traditional', price: 24.99 },
  { id: '4', title: 'Saharan Nights', composer: 'Ali Farka Touré', genre: 'Blues', price: 17.99 },
  { id: '5', title: 'Zulu Warriors', composer: 'Ladysmith Black Mambazo', genre: 'Choral', price: 22.99 },
]

const dummyBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Rise of African Classical Music',
    author: 'John Doe',
    date: '2023-06-01',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    excerpt: 'Exploring the growing influence of African composers in the classical music scene...'
  },
  {
    id: '2',
    title: 'Traditional Instruments in Modern African Music',
    author: 'Jane Smith',
    date: '2023-06-15',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    excerpt: 'How traditional African instruments are finding their place in contemporary music...'
  },
  {
    id: '3',
    title: 'Interview with Ladysmith Black Mambazo',
    author: 'Michael Johnson',
    date: '2023-07-01',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    excerpt: 'An exclusive interview with the legendary South African choral group...'
  }
]

export class MockProvider implements DataProvider {
  private currentUser: User | null = null;

  async signUp(email: string, password: string, name: string): Promise<User> {
    const newUser = { id: String(dummyUsers.length + 1), email, name };
    dummyUsers.push(newUser);
    this.currentUser = newUser;
    return newUser;
  }

  async signIn(email: string, password: string): Promise<User> {
    const user = dummyUsers.find(u => u.email === email);
    if (!user) throw new Error('User not found');
    this.currentUser = user;
    return user;
  }

  async signOut(): Promise<void> {
    this.currentUser = null;
  }

  async getCurrentUser(): Promise<User | null> {
    return this.currentUser;
  }

  async getMusicScores(): Promise<MusicScore[]> {
    return dummyMusicScores;
  }

  async getMusicScore(id: string): Promise<MusicScore | null> {
    return dummyMusicScores.find(score => score.id === id) || null;
  }

  async createMusicScore(score: Omit<MusicScore, 'id'>): Promise<MusicScore> {
    const newScore = { ...score, id: String(dummyMusicScores.length + 1) };
    dummyMusicScores.push(newScore);
    return newScore;
  }

  async updateMusicScore(id: string, score: Partial<MusicScore>): Promise<MusicScore> {
    const index = dummyMusicScores.findIndex(s => s.id === id);
    if (index === -1) throw new Error('Music score not found');
    dummyMusicScores[index] = { ...dummyMusicScores[index], ...score };
    return dummyMusicScores[index];
  }

  async deleteMusicScore(id: string): Promise<void> {
    const index = dummyMusicScores.findIndex(s => s.id === id);
    if (index !== -1) {
      dummyMusicScores.splice(index, 1);
    }
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return dummyBlogPosts;
  }

  async getBlogPost(id: string): Promise<BlogPost | null> {
    return dummyBlogPosts.find(post => post.id === id) || null;
  }
}

