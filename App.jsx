import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Box from './Components/Box';

export default function App() {
  const name = "William Faller L.A. Santos"
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Hello,</Text>
        <Text style={styles.textName}>{name}</Text>
        <StatusBar style="light" backgroundColor='#333' />
        <View style={styles.boxContainer}>
          <Box title={"Treinos no mês"} data={"13"}/>
          <Box title={"Ranking"} data={"8°"}/>
        </View>
        <View style={styles.trainings}>
          <Text style={styles.text}>Meus Treinos</Text>
          <View style={styles.training}>
            <Text style={styles.text}>Segunda-Feira</Text>
          </View>    
          <View style={styles.training}>
            <Text style={styles.text}>Segunda-Feira</Text>
          </View>        
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  trainings: {
    paddingVertical : 20,
    gap: 10,
  },
  training: {
    borderRadius: 20,
    width: '100%',
    height: 80,
    backgroundColor: '#20232C',
  },
  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textName: {
    color: '#EE141F',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
