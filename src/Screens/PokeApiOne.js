import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native';

export default function PokeApiOne () {
  const [data, setPokeApiOne] = useState([]);

  const getPokeApiOne = async () => {
     try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/3');
      const json = await response.json();
      setPokeApiOne(json.forms);
    } 
    
      catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getPokeApiOne();
  }, []);

  

  return (
    
    <View>
    <View style={{ flexDirection: 'row' }}>
    <View style={{ width: 100,}}>
    <Text style={{ color: 'black',textAlign:'center'}}>Nombre del Pokemon</Text>
    </View>
    <View style={{ width: 100}}>
    <Text style={{ color: 'black',textAlign:'center'}}>URL</Text>
    </View>
    </View>	
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={{ flexDirection: 'row'}}>
            <View style={{ width: 100, backgroundColor: 'white'}}>
            <Text>{item.name}</Text>
            </View>
            <View style={{ width: 100, backgroundColor: 'white'}}>
            <Text>{item.url}</Text>
            </View>
            </View>
          )}
        />
   
    </View>

  );
};
