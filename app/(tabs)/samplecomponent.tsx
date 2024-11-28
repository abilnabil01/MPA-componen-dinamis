import React from 'react';
import {View, Text, Image,TextInput,} from 'react-native';

const SampleComponent = () => {
    return(
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}}/>
      <Text>Deri</Text>
      <Afandi />
      <Text>Adit</Text>
      <Text>Udin</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}}/>
    </View>
    );
  }
  
  const Afandi =() => {
    return <Text> Deri Afandi</Text>;
  };
  
  const Photo = () => {
    return (
      <Image
      source={{
        uri: 'https://i1.sndcdn.com/artworks-m7Uqo9Yy2cPj9NAr-LCtyqw-t500x500.jpg',
      }}
      style={{width:100, height:100}}
      />
      );
  };
  
  export default SampleComponent;