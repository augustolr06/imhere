import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {

  const [participants, setParticipants] = useState<string[]>([])

  function handleParticipantAdd() {
    setParticipants(prevState => [...prevState, ' novoParticipante'])
  }

  function handleParticipantRemove(name: string) {
    console.log(`Remover participante: ${name}`);
  }

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
          onPress={handleParticipantAdd}
          >
            <Text style={styles.buttonText} >
              +
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={participants}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Participant
              name={item}
              onRemove={() => handleParticipantRemove(item)}
            />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText} >
              Ninguém chegou ainda? Adicione participantes a sua lista de presença.
            </Text>
          )}
        />

      </View>
    </>
  );
}
