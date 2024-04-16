/* eslint-disable no-unused-vars */
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";

const useSignUpWithEmail = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const signup = async ({ password, email, fullName, userName }) => {

    if (!email || !password || !userName || !fullName) {
        toast.error('Please fill all the fields')
      return;
    }
    try {
      const newUser = await createUserWithEmailAndPassword(email, password);
      if (!newUser && error) {
        toast.error('There is a user with this email')
        return;
      }
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: email,
          username: userName,
          fullName: fullName,
          bio: "",
          profilePicURL: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { loading, error, signup };
};
export default useSignUpWithEmail;
