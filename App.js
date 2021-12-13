import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Button} from 'react-native';
import {useState} from 'react';


export default function App() {

  function renderItem({item}){
    return(
    <View>
      <Text>{item.name} {item.salary}</Text>
    </View>
    );
  }

  const [employees, setEmployees] = useState([]);
  const url = 'http://localhost:3000/employees';
  function handleFetchButton(){
    fetch(url)
    //névtelen függvénynek a paramétere a response
    .then(response => response.json()) 
    .then(result => {
      console.log(result);
      setEmployees(result); 
    });
  }

  return (
    <View style={styles.container}>
      <Text>Lista</Text>
      <Button title="Letölt" onPress={handleFetchButton}/>
      <FlatList
        data={employees}
        renderItem={renderItem}
        keyExtractor={item => item.name}  //ide az azonosító kellene csak mi olyat nem csináltunk
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
