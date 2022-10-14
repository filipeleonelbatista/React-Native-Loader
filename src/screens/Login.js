import { useState } from 'react';
import { Alert, Button, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import { useLoader } from '../hooks/useLoader';
import Dashboard from './Dashboard';

export default function Login() {

  const { isLoading, handleLoader } = useLoader();

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [wasLoaded, setWasLoaded] = useState(false)

  const handleSignIn = async () => {
    await handleLoader()
    setWasLoaded(true)
  }

  if (wasLoaded) return <Dashboard />

  return (
    <View style={styles.container}>
      <View style={{
        padding: 8,
        flexDirection: "column",
        width: Dimensions.get("screen").width - 32
      }}>
        <Text
          style={{
            marginBottom: 8,
            fontSize: 16,
            fontWeight: 'bold',
            color: "#FFF"
          }}
        >Email</Text>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{
            width: "100%",
            paddingHorizontal: 14,
            paddingVertical: 8,
            backgroundColor: "#CCC",
            borderRadius: 8,
            marginBottom: 8,
          }}
        />
      </View>
      <View style={{
        padding: 8,
        flexDirection: "column",
        width: Dimensions.get("screen").width - 32
      }}>
        <Text
          style={{
            marginBottom: 8,
            fontSize: 16,
            fontWeight: 'bold',
            color: "#FFF"
          }}
        >Senha</Text>
        <TextInput
          value={senha}
          onChangeText={(text) => setSenha(text)}
          secureTextEntry
          style={{
            width: "100%",
            paddingHorizontal: 14,
            paddingVertical: 8,
            backgroundColor: "#CCC",
            borderRadius: 8,
            marginBottom: 8,
          }}
        />
      </View>
      <Button
        onPress={() => handleSignIn()}
        title="Entrar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a2a2a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
