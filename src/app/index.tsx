

import { Image } from "expo-image";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";


export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require("../../assets/images/logo.svg")} />

                <View>
                    <Text style={styles.title} >Transforme números em informação</Text>
                    <Text style={styles.subtitle} >Digite seu CEP e descubra mais.</Text>
                </View>
            </View>

            <View style={styles.titlebox}>
                <TextInput style={styles.input} placeholder="Ex.: 63100600" placeholderTextColor="#6F6969cc"></TextInput>
                <TouchableOpacity style={styles.button}><Text style={styles.buttonText} >Search</Text></TouchableOpacity>
            </View>
        </View>
    )
}