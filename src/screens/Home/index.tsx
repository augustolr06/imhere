import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  return (
    <>
      <View style={styles.container} >
        <Text style={styles.eventName} >
          Nome do Evento
        </Text>

        <Text style={styles.eventDate}>
          Data do Evento
        </Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#9C98A6"
          />
          <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('TouchableOpacity foi clicado.')}
          >
            <Text style={styles.buttonText} >
              +
            </Text>
          </TouchableOpacity>
        </View>

        <Participant />
      </View>
    </>
  );
}
