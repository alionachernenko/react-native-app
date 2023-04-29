import { Header } from "../../components/Header"
import { KeyboardWrapper } from "../../components/KeyboardWrapper"
import { View, Image, TextInput, TouchableOpacity } from "react-native"
import { Ionicons } from '@expo/vector-icons';

const CommentsScreen = () => {
    return (
        <KeyboardWrapper>
        <Header title="Comments" />
        <View>
          <Image />
          <View style={{ paddingVertical: 16, justifyContent: "center" }}>
            <TextInput
              keyboardType="default"
              placeholder="Comment..."
              placeholderTextColor="#BDBDBD"
            />
            <TouchableOpacity
              style={{ position: "absolute", right: 8 }}
            >
              <Ionicons name="send" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardWrapper>
    )
}

export default CommentsScreen