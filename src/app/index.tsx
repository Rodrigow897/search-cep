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

    const fetchAdressData = async () => {
         if (cep.length < 8) {
      setError("Digite um CEP válido com 8 números.");
      setEndereco(null); 
    }

    try {
      const response = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`);
        const data = await response.json();

           if (data?.status === 400) {
        setError("CEP não encontrado.");
        setEndereco(null);
      } else {
        setEndereco(data);
        setError(null);
      }
    } catch (err) {
      setError("Erro ao buscar CEP.");
      setEndereco(null);
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
                <TextInput style={styles.input} placeholder="Ex.: 63100600" placeholderTextColor="#6F6969cc"></TextInput>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText} >Search</Text></TouchableOpacity>
            </View>
        </View>
    )
}

function setError(arg0: string | null) {
        throw new Error("Function not implemented.");
    }
    function setEndereco(arg0: null) {
        throw new Error("Function not implemented.");
    }