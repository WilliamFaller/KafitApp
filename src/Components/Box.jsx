import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoxContent = (props) => {
  return (
    <>
      <Text style={styles.textBoxTitle}>{props.title}</Text>
      <Text style={styles.textBoxNumber}>{props.data}</Text>
    </>
  );
};

function Box(props) {
  return (
    <View style={styles.boxContainer}>
      <View style={styles.box}>
        <BoxContent title={props.title} data={props.data} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textBoxTitle: {
    padding: 10,
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textBoxNumber: {
    alignSelf: 'center',
    color: '#EE141F',
    fontSize: 45,
    fontWeight: 'bold',
  },
  box: {
    borderRadius: 20,
    width: 160,
    height: 120,
    backgroundColor: '#20232C',
  },
});

export default Box;
