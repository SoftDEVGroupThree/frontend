import {StyleSheet, View, Text} from "react-native";
import { colors } from "../component/colors";
import { Button } from "react-native-web";
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
            <View style = {{padding: 30}}>
              <Link href="screen/login">
              <Button title= "Let's get started!"
                color = {colors.dark}
                ></Button>
              </Link>
            </View>
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
});
