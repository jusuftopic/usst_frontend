import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {AppConstants} from '../../../app/app.constants';
import {Admin} from '../model/admin.model';
import {child, get, getDatabase, ref} from 'firebase/database';
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import UserInfo = firebase.UserInfo;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private path = AppConstants.FIREBASE_ADMIN;

  private daInstance = getDatabase();
  private auth = getAuth();

  constructor(private firebaseAuth: AngularFireAuth,
              private angularFirestore: AngularFirestore) {
  }

  public signUp(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  public signOut(): Promise<void> {
    return this.firebaseAuth.signOut();
  }

  public getAdminById(id: string): Promise<Admin> {
    const dbRef = ref(this.daInstance);
    return get(child(dbRef, this.path + '/' + id)).then(snapshot => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return null;
      }
    });
  }

  public checkAdminAuthStatus(): Promise<UserInfo | null>{
    return new Promise((resolve, reject) => {
      onAuthStateChanged(this.auth, (user) => {
        if (!user){
          reject(null);
        }
        resolve(user);
      })
    })
  }
  public signOutCurrentAdmin(): Promise<void>{
    return signOut(this.auth);
  }
}
