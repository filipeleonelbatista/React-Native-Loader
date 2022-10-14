import { StatusBar } from 'expo-status-bar';
import { LoaderContextProvider } from './src/context/LoaderContext';
import Login from './src/screens/Login';

export default function App() {
  return (
    <LoaderContextProvider>
      <StatusBar style="auto" />
      <Login />
    </LoaderContextProvider>
  );
}

