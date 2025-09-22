import { Image } from "expo-image";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/styles";

interface AdressData {
  cep: string;
  address_type: string;
  address_name: string;
  address: string;
  state: string;
  district: string;
  lat: string;
  lng: string;
  city: string;
  city_ibge: string;
  ddd: string;
}


export default function App() {
    const [cep, setCep] = useState('');
    const [adressData, setAdressData] = useState<AdressData | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchAdressData = async () => {
         if (cep.length < 8) {
      setError("Digite um CEP válido com 8 números.");
      setAdressData(null); 
    }

    try {
      const response = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`);
        const data = await response.json();

           if (data?.status === 400) {
        setError("CEP não encontrado.");
        setAdressData(null);
      } else {
        setAdressData(data);
        setError(null);
      }
    } catch (err) {
      setError("Erro ao buscar CEP.");
      setAdressData(null);
    }
  };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require("../../assets/images/logo.svg")} />

                <View>
                    <Text style={styles.title} >transform numbers into information</Text>
                    <Text style={styles.subtitle} >Enter your zip code and find out more.</Text>
                </View>
            </View>

            <View style={styles.inputBox}>
                <TextInput style={styles.input}
                keyboardType="numeric"
                maxLength={8}
                value={cep}
                onChangeText={setCep}
                placeholder="Ex.: 63100600" 
                placeholderTextColor="#6F6969cc">
                </TextInput>
                <TouchableOpacity style={styles.button}
                    onPress={fetchAdressData}>
                    <Text style={styles.buttonText}>Search
                    </Text>
                </TouchableOpacity>
            </View>

            {error ? <Text style={{ color: 'red', marginBottom: 20 }}>{error}</Text> : null}

            {adressData && (
                <View style={{ alignItems: 'center', gap: 10 }}>
                    <Text>CEP: {adressData.cep}</Text>
                    <Text>Address Type: {adressData.address_type}</Text>
                    <Text>Address Name: {adressData.address_name}</Text>
                    <Text>Address: {adressData.address}</Text>
                    <Text>District: {adressData.district}</Text>
                    <Text>City: {adressData.city}</Text>
                    <Text>State: {adressData.state}</Text>
                    <Text>DDD: {adressData.ddd}</Text>
                    <Text>Latitude: {adressData.lat}</Text>
                    <Text>Longitude: {adressData.lng}</Text>
                    <Text>City IBGE: {adressData.city_ibge}</Text>
                </View>
            )}
        </View>
    )
}