import { createContext , useReducer, useEffect, useMemo} from "react";

export const initialState = {theme: localStorage.getItem('theme') || 'light', dentists: [], favs: [] }

export const ContextGlobal = createContext(undefined);

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem('theme', newTheme);
      document.body.classList.remove(state.theme);
      document.body.classList.add(newTheme);
      return { ...state, theme: newTheme };
    case "SET_DENTISTS":
      return { ...state, dentists: action.payload };

    case "ADD_FAV":
      if (state.favs.some(fav => fav.id === action.payload.id)) {
        return state; 
      }
      const newFav = [...state.favs, action.payload];
      localStorage.setItem('favs', JSON.stringify(newFav));
      return { ...state, favs: newFav };

    case "REMOVE_FAV":
      const updatedFavs = state.favs.filter(fav => fav.id !== action.payload.id);
      localStorage.setItem('favs', JSON.stringify(updatedFavs));
      return { ...state, favs: updatedFavs };

    case "LOAD_FAV":
      return { ...state, favs: action.payload };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const localFavs = JSON.parse(localStorage.getItem('favs')) || [];
    dispatch({ type: 'LOAD_FAV', payload: localFavs });

    // Aplicar el tema almacenado en localStorage al cargar la aplicación
    const localTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(localTheme);
  }, []);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};


