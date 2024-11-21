import { Image } from "expo-image";
import { useState } from "react";
import { TextInput, View, StyleSheet, Switch, TouchableHighlight, Text, Alert } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  container: {
    padding: 50,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000",
    gap: 25,
  },
  image: {
    width: 200,
    aspectRatio: 1,
  },
  input: {
    color: '#fff',
    height: 40, 
    width: 200, 
    borderColor: '#81b0ff', 
    borderWidth: 1
  },
  required: {
    color: '#fff',
    height: 40, 
    width: 200, 
    borderColor: 'red',
    borderWidth: 1
  },
  switch: {
    transform: [{ scaleX: 2 }, { scaleY: 2 }],
  },
  button: {
    transform: [{ scaleX: 2 }, { scaleY: 2 }],
    backgroundColor: '#81b0ff',
    padding: 5,
  },
  disabled: {
    transform: [{ scaleX: 2 }, { scaleY: 2 }],
    backgroundColor: '#f4f3f4',
    padding: 5,
  },
});

export default function index() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handleRegister = () => {
    Alert.alert(
      "Registration Details",
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}`
    );
    console.log({ name, phone, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cat</Text>
      <Image 
        source={{uri: "https://i.redd.it/be0z2u79taaa1.gif"}}
        style={styles.image}
      />
      <TextInput
        style={name ? styles.input : styles.required}
        placeholder="Name"
        placeholderTextColor={'#fff'}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={phone ? styles.input : styles.required}
        placeholder="Phone"
        placeholderTextColor={'#fff'}
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={email ? styles.input : styles.required}
        placeholder="Email"
        placeholderTextColor={'#fff'}
        value={email}
        onChangeText={setEmail}
      />
      <Text style={{color: '#fff'}}>
        Do you agree?
      </Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.switch}
      />
      <TouchableHighlight 
        onPress={handleRegister} 
        disabled={!isEnabled || name === '' || phone === '' || email === ''}
      >
        <View style={!isEnabled || name === '' || phone === '' || email === '' ? styles.disabled : styles.button}>
          <Text>Register</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}
