import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default function App() {
  const [gasolina, setGasolina] = useState(''); //UseState serve para armazenar os dados
  const [etanol, setEtanol] = useState('');
  const [resultado, setResultado] = useState('');
  const [image, setImage] = useState(''); 

  function calcular(){
    if (!gasolina || !etanol) {
      setResultado('Informe os valores de gasolina e etanol');
      setImage('')
      return;
    }

    const valorGasolina = parseFloat(gasolina);
    const valorEtanol = parseFloat(etanol);

    if (valorEtanol <= 0.7 * valorGasolina) {
      setResultado('É mais vantajoso abastecer com etanol');
      setImage(require('./assets/etanol.png'));
    } else {
      setResultado('É melhor abastecer com gasolina');
      setImage(require('./assets/gasolina.png'));
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Valor da gasolina:</Text>
        <TextInput
          style={styles.input}
          value={gasolina}
          onChangeText={(value) => setGasolina(value)}
          keyboardType='numeric'>
        </TextInput>

        <Text style={styles.label}>Valor do etanol:</Text>
        <TextInput
          style={styles.input}
          value={etanol}
          onChangeText={(value) => setEtanol(value)}
          keyboardType='numeric'>
        </TextInput>
        <Text style={styles.button} onPress={calcular}>calcular</Text>
        </View>
        <View style={styles.resultContainer}>
          <Text style={styles.result}>{resultado}</Text>
          {image && <Image source={image} style={styles.image}/>}
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center'
  },
  button:{
    color:'black',
    backgroundColor:'white',
    fontSize: 20,
    alignItems: ' center',
    justicyContent: 'center',
    padding: '16',
    borderRadius: 8
  }
});
