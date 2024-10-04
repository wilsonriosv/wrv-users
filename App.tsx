import { COLORS, Spinner, Button, Input } from '@core';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [loaded, error] = useFonts({
    'PlaypenSans-Bold': require('./assets/fonts/PlaypenSans-Bold.ttf'),
    'PlaypenSans-Regular': require('./assets/fonts/PlaypenSans-Regular.ttf'),
    'PlaypenSans-Light': require('./assets/fonts/PlaypenSans-Light.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'PlaypenSans-Bold', fontSize: 24 }}>
        App!!!
      </Text>
      <Input value='Text' onChange={() => console.log} />
      <Button title='Presióname1...' onPress={() => Alert.alert('Alerta')} />
      <Button
        title='Botón componente2'
        onPress={() => Alert.alert('Presionaste el botón 2')}
      />
      <Text style={{ fontFamily: 'PlaypenSans-Bold', fontSize: 24 }}>
        Bienvenido a mi nueva app!!!
      </Text>
      <Text style={{ fontFamily: 'PlaypenSans-Regular', fontSize: 24 }}>
        Bienvenido a mi nueva app!!!
      </Text>
      <Text style={{ fontFamily: 'PlaypenSans-Light', fontSize: 24 }}>
        Bienvenido a mi nueva app!!!
      </Text>
      <ActivityIndicator size='large' color='blue' />
      <Text style={styles.text1}>Esto es un spinner</Text>
      <StatusBar style='auto' />
      <Spinner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTouchOpac: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  txtBtnTouchOpac: {
    color: 'white',
    fontFamily: 'PlaypenSans-Bold',
  },
  text1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.complementary,
    padding: 20,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'PlaypenSans-Regular',
  },
});
