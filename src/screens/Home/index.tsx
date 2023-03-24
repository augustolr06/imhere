import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {

  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {
    if (participantName === '') {
      return Alert.alert('Você não digitou um nome','Digite um nome para adicionar a lista de presença')
    }
    if (participants.includes(participantName)) {
      return;
    }
    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover participante', `Tem certeza que deseja remover ${name} da lista de presença?`, [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      }
    ])
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
            value={participantName}
            onChangeText={setParticipantName}
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
