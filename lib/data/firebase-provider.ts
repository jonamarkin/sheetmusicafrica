// import { initializeApp } from 'firebase/app'
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User as FirebaseUser } from 'firebase/auth'
// import { getFirestore, collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
// import { DataProvider, User, MusicScore } from './interfaces'

// export class FirebaseProvider implements DataProvider {
//   private auth;
//   private db;

//   constructor() {
//     const app = initializeApp({
//       // Your Firebase configuration
//     });
//     this.auth = getAuth(app);
//     this.db = getFirestore(app);
//   }

//   private userFromFirebaseUser(firebaseUser: FirebaseUser): User {
//     return {
//       id: firebaseUser.uid,
//       email: firebaseUser.email!,
//       name: firebaseUser.displayName || ''
//     };
//   }

//   async signUp(email: string, password: string, name: string): Promise<User> {
//     const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
//     // TODO: Update user profile with name
//     return this.userFromFirebaseUser(userCredential.user);
//   }

//   async signIn(email: string, password: string): Promise<User> {
//     const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
//     return this.userFromFirebaseUser(userCredential.user);
//   }

//   async signOut(): Promise<void> {
//     await signOut(this.auth);
//   }

//   async getCurrentUser(): Promise<User | null> {
//     const user = this.auth.currentUser;
//     return user ? this.userFromFirebaseUser(user) : null;
//   }

//   async getMusicScores(): Promise<MusicScore[]> {
//     const querySnapshot = await getDocs(collection(this.db, 'music_scores'));
//     return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as MusicScore));
//   }

//   async getMusicScore(id: string): Promise<MusicScore | null> {
//     const docSnap = await getDoc(doc(this.db, 'music_scores', id));
//     return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } as MusicScore : null;
//   }

//   async createMusicScore(score: Omit<MusicScore, 'id'>): Promise<MusicScore> {
//     const docRef = await addDoc(collection(this.db, 'music_scores'), score);
//     return { id: docRef.id, ...score };
//   }

//   async updateMusicScore(id: string, score: Partial<MusicScore>): Promise<MusicScore> {
//     await updateDoc(doc(this.db, 'music_scores', id), score);
//     const updatedDoc = await this.getMusicScore(id);
//     if (!updatedDoc) throw new Error('Failed to update music score');
//     return updatedDoc;
//   }

//   async deleteMusicScore(id: string): Promise<void> {
//     await deleteDoc(doc(this.db, 'music_scores', id));
//   }
// }
