import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import { colors } from "../component/colors";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
            <View style = {{padding: 30}}>
                <Text style = {styles.text}>     Meety</Text>
                <Text style = {styles.text}>
                    Meeting Me
                </Text>
            </View>
            <View style = {[styles.box]}></View>
            <TouchableOpacity style ={{padding: 30}}>
            <Link href="screen/login">
            <Text style={styles.buttonText}>Les's get started!</Text>
            </Link>
            </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
},
text: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.dark,
},
box: {
    width: 200,
    height: 200,
    backgroundColor: colors.box,
    borderRadius: 20
},
button: {
    backgroundColor: colors.dark,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
},
buttonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
  textAlign: 'center',
}
});
