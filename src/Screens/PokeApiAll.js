import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native';



export default function PokeApiAll () {
  const [data, setPokeApiAll] = useState([]);

  const getPokeApiAll = async () => {
     try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const json = await response.json();
      setPokeApiAll(json.results);
    } 
    
      catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getPokeApiAll();
  }, []);

  

  return (
    
    <View>
    <View style={{ flexDirection: 'row' }}>
    <View style={{ width: 100,}}>
    <Text style={{ color: 'black',textAlign:'center'}}>Pokemon</Text>
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
