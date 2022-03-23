import { getAuth, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth'
import { saveUser, getUser } from './db'
const provider = new GoogleAuthProvider()
const auth = getAuth()
export const signIn = () => {
  return signInWithRedirect(auth, provider)
}
export const signOut = () => {
  return auth.signOut()
}
export const onAuthStateChanged = (callback: (user: any) => void) => {
  return auth.onAuthStateChanged(callback)
}
