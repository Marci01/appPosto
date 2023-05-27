import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [alcoholPrice, setAlcoholPrice] = useState('');
  const [gasolinePrice, setGasolinePrice] = useState('');
  const [result, setResult] = useState('');

  const calculateBestOption = () => {
    if (alcoholPrice && gasolinePrice) {
      const alcoholValue = parseFloat(alcoholPrice.replace(',', '.'));
      const gasolineValue = parseFloat(gasolinePrice.replace(',', '.'));

      const divisionResult = alcoholValue / gasolineValue;

      if (divisionResult < 0.7) {
        setResult('Abastecer com álcool é a melhor opção.');
      } else {
        setResult('Abastecer com gasolina é a melhor opção.');
      }
    } else {
      setResult('Digite os preços do álcool e da gasolina.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Álcool ou Gasolina?</Text>

      <TextInput
        style={styles.input}
        onChangeText={text => setAlcoholPrice(text)}
        placeholder="Preço do álcool"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        onChangeText={text => setGasolinePrice(text)}
        placeholder="Preço da gasolina"
        keyboardType="numeric"
      />

      <Button title="Calcular" onPress={calculateBestOption} />

      <Text style={styles.result}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
	
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFA500',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: '#FFFFFF',
  },
});