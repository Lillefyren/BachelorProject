import React from "react";

const TokenContext = React.createContext(null); //React context makes it possible to pass stuff througout the react-app

function TokenProvider(props) {
  const [token, setToken] = React.useState(
    localStorage.getItem("token") || null
  ); //either getting the local storage token or nothing

  const handleSetToken = (token) => {
    localStorage.setItem("token", token); //setting local storage token
    setToken(token);
  };

  const handleRemoveToken = () => {
    localStorage.removeItem("token"); //removing local storage token
    setToken(null);
  };

  const tokenAPI = { token, handleRemoveToken, handleSetToken };

  return (
    //giver adgang til token og settoken, så man kan opdatere state alle steder fra
    //props.children er alle ting der er wrapper ind fra index.js. Her behøver man ikke at definere children i index.js
    <TokenContext.Provider value={tokenAPI}>
      {props.children}
    </TokenContext.Provider>
  );
}

export { TokenProvider, TokenContext };
