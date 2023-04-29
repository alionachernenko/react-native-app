import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export const RegistrationScreen = ({ navigation }) => {
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
          <View style={styles.avatarWrapper}></View>
            <Text style={styles.title}>Sign Up</Text>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <TextInput
                style={styles.input}
                value={state.login}
                onChangeText={(text) =>
                  setState((prev) => ({ ...prev, login: text }))
                }
                placeholder="Login"
              />
            </KeyboardAvoidingView>
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
                  onChangeText={(text) =>
                    setState((prev) => ({ ...prev, password: text }))
                  }
                  secureTextEntry={showPassword}
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
            <Text style={styles.switchScreenButton} onPress={() => navigation.navigate('Login')}>
              Already have an account?
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

  avatarWrapper: {
    position: "absolute",
    width: 120,
    alignSelf: "center",
    height: 120,
    backgroundColor: "grey",
    top: -60,
    borderRadius: 16,
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },

  form: {
    justifyContent: "center",
    backgroundColor: "#fff",
    marginTop: "auto",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingBottom: 78,
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
  },

  switchScreenButton: {
    textAlign: "center",
    color: "#1B4371",
    fontSize: 16,
  },
});
