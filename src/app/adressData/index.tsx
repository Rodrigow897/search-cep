import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/styles";


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

export default function Result() {
  const { cep } = useLocalSearchParams();
  const [adressData, setAdressData] = useState<AdressData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdressData = async () => {
      try {
        const response = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`);
        const data = await response.json();

        if (data?.status === 400) {
          setError("zip code not found.");
          setAdressData(null);
        } else {
          setAdressData(data);
          setError(null);
        }
      } catch (err) {
        setError("Error searching zip code.");
      } finally {
        setLoading(false);
      }
    };

    fetchAdressData();
  }, [cep]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ImageBackground style={styles.container} source={require("../../../assets/images/cityBG.jpeg")}>
    <View>
      {error ? (
        <Text style={{ color: "red" }}>{error}</Text>
      ) : adressData ? (
        <View style={{ alignItems: "center", gap: 10 }}>
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
        
      ) : null}
        
      <View style={{ marginTop: 50 }}>
      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
}
