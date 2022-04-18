

import React from 'react';
import {
 View,Text
} from 'react-native';

import { Provider } from 'react-redux';
import ApiClient from './src/api-client';
import { store } from './stores';
interface AppProps{
  navigation:any
}

const App = (props:AppProps) => {
  React.useEffect(() => {
    const apiClient = new ApiClient()
    apiClient.creatAxiosInstance()
  }, []);


  return (
    <>
      <Provider store={store}>
        <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
          <Text style={{fontSize:24,color:'green'}}>Welcome to React native</Text>
          {/* Remove view and add here main navigation and loader
           <MainNavigation />
        <Loader /> */}
        </View>
      </Provider>
    </>
  );
};



export default App;
