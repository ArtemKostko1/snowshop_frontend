import { useSelector } from "react-redux";
import { RootState } from "../../store"; // Импортируйте RootState из вашего store

export const useAuth = () => {
  const { isLoading, user } = useSelector((state: RootState) => state.auth);

  const isAuth = !!sessionStorage.getItem("token");

  return { isLoading, isAuth, user };
};