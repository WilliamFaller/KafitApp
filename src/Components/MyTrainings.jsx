import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const { navigate } = useNavigation()

const Trains = (props) => {
    return (
        <TouchableOpacity style={styles.training}>
            <View style={styles.trainingContent}>
                <Text style={styles.boxTextTitle}>{props.day}</Text>
                <Text style={styles.boxText}>{props.train}</Text>
            </View>
            <Text style={[styles.boxText, styles.goText]}>Go</Text>
        </TouchableOpacity>
    )
}

function MyTrainings() {
  return (
    <View style={styles.trainings}>
      <Text style={styles.textTitle}>Meus Treinos</Text>
      <Trains day={"Segunda-Feira"} train={"Peito e Triceps"} onPress={() => navigate('treino')}/>
      <Trains day={"Terça-Feira"} train={"Costas e Biceps"} />
      <Trains day={"Quarta-Feira"} train={"Quadriceps e Ombro"} />
      <Trains day={"Quinta-Feira"} train={"Posterior e Trapézio"} />
      <Trains day={"Sexta-Feira"} train={"Jiu-Jistu"} />
    </View>
  );
}

const styles = StyleSheet.create({
  trainings: {
    paddingVertical: 20,
    gap: 10,
  },
  training: {
    borderRadius: 10,
    width: '100%',
    height: 70,
    backgroundColor: '#20232C',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  trainingContent: {
    flex: 1,
  },
  textTitle: {
    paddingHorizontal: 10,
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  boxTextTitle: { 
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  boxText: {
    color: '#EE141F',
    fontSize: 14,
    fontWeight: 'medium',
  },
  goText: {
    color: '#EE141F',
    fontSize: 14,
    fontWeight: 'medium',
    marginLeft: 'auto',
  },
});

export default MyTrainings;
