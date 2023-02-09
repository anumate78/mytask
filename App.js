import React from 'react';
import {
  View,
  Text,
  LogBox,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import HomeScreen from './src/screens/HomeScreen';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isScreenshot: false,
      isVisible: false,
    };
  }

  componentDidMount() {
    GoogleSignin.configure({
      webClientId:
        '619635473426-o5jdpb4d2lm8lpb8buhmu8ol9erltt2m.apps.googleusercontent.com',
      // '742620242619-lk2v5con6a5udhee75rvgn0k8ua20sg7.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }
  
  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      GoogleSignin.signIn()
        .then(responseData => {
          console.log(responseData.user);

          
        })
        .catch(err => {
         
          console.log('error', err);
        })
        .done();
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('"Cancel"');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('"Signin in progress"');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('"PLAY_SERVICES_NOT_AVAILABLE"');
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  render() {
    return (
      
        <View style={{flex: 1, backgroundColor: '#cfdff6'}}>
          <HomeScreen />
        </View>
      
    );
  }
}
const styles = StyleSheet.create({});


export default App;