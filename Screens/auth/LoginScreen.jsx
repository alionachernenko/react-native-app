import React, { useState } from "react";
import {
  Keyboard,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const initialState = {
  email: "",
  password: "",
};

export const LoginScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState(initialState);

  const onFormSubmit = () => {
    console.log(state);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/background.png")}
          style={styles.image}
        >
          <View style={styles.form}>
            <Text style={styles.title}>Sign In</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                style={styles.input}
                value={state.email}
                onChangeText={(text) =>
                  setState((prev) => ({ ...prev, email: text }))
                }
                placeholder="E-mail"
              />
            </KeyboardAvoidingView>

            <View style={styles.passwordInputWrapper}>
              <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <TextInput
                  style={styles.input}
                  value={state.password}
                  secureTextEntry={showPassword}
                  onChangeText={(text) =>
                    setState((prev) => ({ ...prev, password: text }))
                  }
                  textContentType="password"
                  placeholder="Password"
                />
              </KeyboardAvoidingView>

              <Text
                style={styles.showPasswordButton}
                onPress={() => setShowPassword((prev) => !prev)}
              >
                Show
              </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={onFormSubmit}>
              <Text style={styles.buttonTitle}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.switchScreenButton} onPress={() => navigation.navigate('Registration')}>
              Dont't have an account?
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
  },

  form: {
    justifyContent: "center",
    backgroundColor: "#fff",
    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 32,
    paddingBottom: 144,
    paddingHorizontal: 16,
  },

  input: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },

  passwordInputWrapper: {
    position: "relative",
  },

  showPasswordButton: {
    fontSize: 16,
    position: "absolute",
    top: 20,
    right: 16,
  },

  title: {
    color: "#000",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 32,
  },

  button: {
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginBottom: 16,
  },

  buttonTitle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },

  switchScreenButton: {
    textAlign: "center",
    color: "#1B4371",
    fontSize: 16,
  },
});
