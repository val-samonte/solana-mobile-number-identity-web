import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { atom } from 'jotai'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mythrilsoft-app.firebaseapp.com',
  databaseURL: 'https://mythrilsoft-app.firebaseio.com',
  projectId: 'mythrilsoft-app',
  storageBucket: 'mythrilsoft-app.appspot.com',
  messagingSenderId: '213193041197',
  appId: '1:213193041197:web:6fcfb7ee03d466778a1fa4',
  measurementId: 'G-5B8CFCWV59',
}

export const firebaseAtom = atom(() => initializeApp(firebaseConfig))
export const firebaseAuthAtom = atom((get) => getAuth(get(firebaseAtom)))
