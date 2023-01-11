import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Platform, KeyboardAvoidingView, StyleSheet, TouchableWithoutFeedback, Button, Keyboard } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import SelectDropdown from 'react-native-select-dropdown'
import styles from './AddClientStyles'; 

// import { useNavigation } from '@react-navigation/native';
// import { Dropdown } from 'react-native-material-dropdown';

const countries = ["Bronx", "Brooklyn", "Manhattan", "Queens", "Staten Island"]

export default function AddClient() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [living, setLiving] = useState("");
    const [personalB, setPersonalB] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            setFirstName("");
            setLastName("");
            setBirthDate("");
            setLiving("");
            setPersonalB("");
            navigation.navigate("Home");
            
        } catch (error) {
          setError(error.message);
        }
        setLoading(false);
      };
 
      
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        >
            <Text style={styles.header}>Add a New Client!</Text>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="First Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={(firstName) => setFirstName(firstName)}
                    value={firstName}
                />
            </View>

            <SelectDropdown style = {styles.selectDropdown} data = {countries} onSelect = {(selectedItem, index) => {
                console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                return item
            }}
            />

            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Last Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={(lastName) => setLastName(lastName)}
                    value={lastName}
                />
            </View>
            

            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Birthdate"
                    placeholderTextColor="#003f5c"
                    onChangeText={(birthDate) => setBirthDate(birthDate)}
                    value={birthDate}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Last Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={(lastName) => setLastName(lastName)}
                    value={lastName}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Living Situation"
                    placeholderTextColor="#003f5c"
                    onChangeText={(living) => setLiving(living)}
                    value={living}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Personal Background"
                    placeholderTextColor="#003f5c"
                    onChangeText={(personalB) => setPersonalB(personalB)}
                    value={personalB}
                />
            </View>

            <TouchableOpacity 
                style={styles.submitBtn}
                disabled={loading} 
                onPress={handleSubmit}>

                <Text style={styles.submitText}>{loading ? "Loading..." : "Submit"}</Text>
            </TouchableOpacity>
            {error && <Text style={styles.errorText}>{error}</Text>}

            <StatusBar style='auto'/>
        </KeyboardAvoidingView>
    );
    
}