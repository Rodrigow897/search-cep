import { Image } from "expo-image";
import { router } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/styles";

export default function Home() {
  const [cep, setCep] = useState("");

  const handleSearch = () => {
    if (cep.length < 8) {
      alert("Digite um CEP válido com 8 números.");
      return;
    }
    // navega para result e passa o cep
    router.push({ pathname: "/adressData", params: { cep } });
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo.svg")}
        />

        <View>
          <Text style={styles.title}>transform numbers into information</Text>
          <Text style={styles.subtitle}>
            Enter your zip code and find out more.
          </Text>
        </View>
      </View>

      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          maxLength={8}
          value={cep}
          onChangeText={setCep}
          placeholder="Ex.: 63100600"
          placeholderTextColor="#6F6969cc"
        />
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
