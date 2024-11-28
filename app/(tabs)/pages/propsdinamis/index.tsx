import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

interface StoryProps {
    gambar: string;
    judul: string;
  }
  
  const Story: React.FC<StoryProps> = (props) => {
    return(
        <View style={{alignItems:'center', marginRight:20}}>
            <Image source={{uri: props.gambar,}} 
            style={{width:70, height:70, borderRadius: 70 / 2}} />
            <Text style={{maxWidth:50, textAlign:'center'}}>{props.judul}</Text>
        </View>
    )
}

const PropsDinamis = () => {
    return (
        <View>
            <Text>Materi Component Dinamis dengan Props</Text>
            <ScrollView horizontal>
            <View style={{flexDirection: 'row'}}>
            <Story judul="Youtube Channel" gambar="https://preview.redd.it/fang-yuan-character-analysis-v0-vne1h4z2df2c1.jpg?width=564&format=pjpg&auto=webp&s=3561133034f5ca0fa856c9844a6422912e2c6b9c"/>
            <Story judul="Kelas Online" gambar="https://preview.redd.it/fang-yuan-character-analysis-v0-vne1h4z2df2c1.jpg?width=564&format=pjpg&auto=webp&s=3561133034f5ca0fa856c9844a6422912e2c6b9c"/>
            <Story judul="Filsafat" gambar="https://preview.redd.it/fang-yuan-character-analysis-v0-vne1h4z2df2c1.jpg?width=564&format=pjpg&auto=webp&s=3561133034f5ca0fa856c9844a6422912e2c6b9c"/>
            <Story judul="Memahami Sifat Manusia" gambar="https://preview.redd.it/fang-yuan-character-analysis-v0-vne1h4z2df2c1.jpg?width=564&format=pjpg&auto=webp&s=3561133034f5ca0fa856c9844a6422912e2c6b9c" />
            <Story judul="Youtube Channel" gambar="https://preview.redd.it/fang-yuan-character-analysis-v0-vne1h4z2df2c1.jpg?width=564&format=pjpg&auto=webp&s=3561133034f5ca0fa856c9844a6422912e2c6b9c"/>
            <Story judul="Kelas Online" gambar="https://preview.redd.it/fang-yuan-character-analysis-v0-vne1h4z2df2c1.jpg?width=564&format=pjpg&auto=webp&s=3561133034f5ca0fa856c9844a6422912e2c6b9c"/>
            <Story judul="Filsafat" gambar="https://preview.redd.it/fang-yuan-character-analysis-v0-vne1h4z2df2c1.jpg?width=564&format=pjpg&auto=webp&s=3561133034f5ca0fa856c9844a6422912e2c6b9c"/>
            <Story judul="Memahami Sifat Manusia" gambar="https://preview.redd.it/fang-yuan-character-analysis-v0-vne1h4z2df2c1.jpg?width=564&format=pjpg&auto=webp&s=3561133034f5ca0fa856c9844a6422912e2c6b9c" />
            </View>
            </ScrollView>
        </View>
    );
};

export default PropsDinamis;

const styles = StyleSheet.create({});