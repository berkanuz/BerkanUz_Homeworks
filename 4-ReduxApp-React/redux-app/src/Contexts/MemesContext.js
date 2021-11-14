import { createContext, useContext, useEffect, useState } from "react";

export const MemesContext = createContext();

const MemesProvider = ({ children }) => {
  const [memes, setMemes] = useState();

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((result) => setMemes(result.data.memes));
  }, []);

  const getMemeById = (id) => {
    if (!memes) return null;

    return memes.find((meme) => meme.id === id);
  };

  return (
    <MemesContext.Provider value={{ memes, getMemeById }}>
      {children}
    </MemesContext.Provider>
  );
};

export const useMemesContext = () => useContext(MemesContext);

export default MemesProvider;