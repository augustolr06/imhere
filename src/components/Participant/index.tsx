import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ParticipantProps {
  name: string;
  onRemove?: () => void;
}

export function Participant(props: ParticipantProps) {
  const { name, onRemove } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>
      <TouchableOpacity style={styles.button} onPress={onRemove} >
        <Text style={styles.buttonText} >
          -
        </Text>
      </TouchableOpacity>
    </View>
  );
}
