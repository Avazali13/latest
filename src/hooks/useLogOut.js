import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import toast from "react-hot-toast";

const useLogOut = () => {
  const [signOut, isLoggingout, error] = useSignOut(auth);
  const handleLogut = async () => {
    try {
      await signOut();
      localStorage.removeItem('user-info')
    } catch (error) {
      toast.error(error.message);
    }
  };

  return { signOut, isLoggingout, error };
};
export default useLogOut;
