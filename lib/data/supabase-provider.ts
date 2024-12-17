// import { createClient, SupabaseClient } from '@supabase/supabase-js'
// import { DataProvider, User, MusicScore } from './interfaces'

// export class SupabaseProvider implements DataProvider {
//   private supabase: SupabaseClient;

//   constructor() {
//     this.supabase = createClient(
//       process.env.NEXT_PUBLIC_SUPABASE_URL!,
//       process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
//     );
//   }

//   async signUp(email: string, password: string, name: string): Promise<User> {
//     const { data, error } = await this.supabase.auth.signUp({
//       email,
//       password,
//       options: {
//         data: { name }
//       }
//     });
//     if (error) throw error;
//     return { id: data.user!.id, email, name };
//   }

//   async signIn(email: string, password: string): Promise<User> {
//     const { data, error } = await this.supabase.auth.signInWithPassword({ email, password });
//     if (error) throw error;
//     return { id: data.user.id, email: data.user.email!, name: data.user.user_metadata.name };
//   }

//   async signOut(): Promise<void> {
//     const { error } = await this.supabase.auth.signOut();
//     if (error) throw error;
//   }

//   async getCurrentUser(): Promise<User | null> {
//     const { data, error } = await this.supabase.auth.getUser();
//     if (error || !data.user) return null;
//     return { id: data.user.id, email: data.user.email!, name: data.user.user_metadata.name };
//   }

//   async getMusicScores(): Promise<MusicScore[]> {
//     const { data, error } = await this.supabase.from('music_scores').select('*');
//     if (error) throw error;
//     return data;
//   }

//   async getMusicScore(id: string): Promise<MusicScore | null> {
//     const { data, error } = await this.supabase.from('music_scores').select('*').eq('id', id).single();
//     if (error) throw error;
//     return data;
//   }

//   async createMusicScore(score: Omit<MusicScore, 'id'>): Promise<MusicScore> {
//     const { data, error } = await this.supabase.from('music_scores').insert(score).select().single();
//     if (error) throw error;
//     return data;
//   }

//   async updateMusicScore(id: string, score: Partial<MusicScore>): Promise<MusicScore> {
//     const { data, error } = await this.supabase.from('music_scores').update(score).eq('id', id).select().single();
//     if (error) throw error;
//     return data;
//   }

//   async deleteMusicScore(id: string): Promise<void> {
//     const { error } = await this.supabase.from('music_scores').delete().eq('id', id);
//     if (error) throw error;
//   }
// }

// // Add this new function to create and export the Supabase client
// export const createSupabaseClient = () => {
//   return createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
//   );
// };
