import {
  Dispatch,
  FC,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export const AppContext = createContext<{
  enlargeFont: boolean;
  setEnlargeFont: (font: SetStateAction<boolean>) => void;
}>({
  enlargeFont: false,
  setEnlargeFont: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const AppProvider: FC<Props> = ({ children }) => {
  const [enlargeFont, setEnlargeFont] = useState(false);

  return (
    <AppContext.Provider
      value={{
        enlargeFont,
        setEnlargeFont,
      }}
    >
      <div className={`${enlargeFont ? "enlarge-font" : ""}`}>{children}</div>
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const { enlargeFont, setEnlargeFont } = useContext(AppContext);
  return { enlargeFont, setEnlargeFont };
};
