import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold"
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 14,
    fontWeight: "bold"
  },
  form: {
    flexDirection: "row",
    gap: 12,
    marginTop: 36,
    marginBottom: 42
  },
  input: {
    flex: 1,
    backgroundColor: "#383838",
    color: "#FDFCFE",
    fontSize: 18,
    borderRadius: 8,
    padding: 12,
    marginTop: 12
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    marginTop: 12
  },
  buttonText: {
    color: "#FDFCFE",
    fontSize: 24,
  },
});