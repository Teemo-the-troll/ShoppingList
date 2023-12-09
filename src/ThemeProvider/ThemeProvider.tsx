

//create a dark mode/light mode theme provider
//this will be used to wrap the app in the index.tsx file
import {createContext, useState} from "react";

export const ThemeContext = createContext({theme: "dark", toggleTheme: () => {
    console.log("default")
    }});

function ThemeProvider(props: any) {
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
  return (
      <div>
          <ThemeContext.Provider value={{theme, toggleTheme}}>
              {props.children}
          </ThemeContext.Provider>
      </div>
  )
}

export default ThemeProvider;
