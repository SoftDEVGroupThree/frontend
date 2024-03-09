import { View,Text, StyleSheet, TextInput, Button} from 'react-native';
import { colors } from "../../component/colors";

export default function Login() {
    return (
        <View style={styles.container}>
            <View style = {{padding: 30}}>
                <Text style = {styles.text}>     Meety</Text>
                <Text style = {styles.text}>
                    Meeting Me
                </Text>
            </View>
            <View>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    placeholder = "Email"
                />
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    placeholder = "Password"
                />
            </View>
            <View style = {{padding: 30}}>
                <Button title= "Login"
                    color = {colors.dark}
                ></Button>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: colors.white,
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