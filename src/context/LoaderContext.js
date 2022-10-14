import { createContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import Loader from "../components/Loader";

export const LoaderContext = createContext({});

export function LoaderContextProvider(props) {
  const [isLoading, setIsLoading] = useState(false)

  const handleLoader = async () => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearInterval(timer)
  }

  return (
    <LoaderContext.Provider
      value={{
        isLoading, handleLoader
      }}
    >
      <View style={styles.container}>
        {
          isLoading && <Loader />
        }
        <>{props.children}</>
      </View>
    </LoaderContext.Provider>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
    position: "relative"
  },
});
