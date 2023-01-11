import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView  } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Home() {

  const navigation = useNavigation();

  const handleAddClient = async(e) => {
    try {
        navigation.navigate("AddClient");
    }
    catch (error) {
        setError(error.mesage);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>


      <View style={styles.textClicks}>
      <TouchableOpacity style={styles.forgotBtn}
          onPress={handleAddClient}>

          <Text style={styles.linksText}>Add a New Client</Text>
      </TouchableOpacity>
      </View>

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