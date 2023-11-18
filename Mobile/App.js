import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/Authen/WelcomeScreen';
import LoginScreen from './Screens/Authen/LoginScreen';
import RegisterScreen from './Screens/Register/RegisterScreen';
import MainNavigation from './Navigations/MainNavigation';
import ListBar from './componeent/ListBar';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import Reducer from './store/reducer';

const store = createStore(Reducer);

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
