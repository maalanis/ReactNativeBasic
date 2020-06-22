import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
    
  return <View>
      <Text style={styles.text}>Learn your medicines</Text>
        <Button 
            onPress = {() => navigation.navigate('Components')}
            title = "Go to components demo" 
        />
        <Button
            title = "Go to list"
            onPress = {() =>  navigation.navigate('List')}
        
        />
        <Button 
            title = "Image Scree"
            onPress = {() => navigation.navigate('Image')}
        />
        
         <Button 
            title = "Counter Screen "
            onPress = {() => navigation.navigate('Counter')}
        />
                
         <Button 
            title = "Color Demo "
            onPress = {() => navigation.navigate('Color')}
        />
        <Button 
            title = "Square Demo "
            onPress = {() => navigation.navigate('Square')} 
        />
                
        <Button 
            title = "Text Screen "
            onPress = {() => navigation.navigate('Text')} 
        />
                
                <Button 
            title = "Box Screen "
            onPress = {() => navigation.navigate('Box')} 
        />
                
      </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

