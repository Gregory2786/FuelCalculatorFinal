import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from 'styled-components';

import { 
  useFonts, 
  Poppins_400Regular,
  Poppins_500Medium,
} from '@expo-google-fonts/poppins';

import { 
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';

import theme from './src/global/styles/theme';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular,
    Inter_400Regular,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return <Loading/>;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <Home />
    </ThemeProvider>
  );
}
