import * as React from 'react';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-to-do-components';
//import { SafeAreaProvider } from 'react-native-safe-area-context';

const App: React.FunctionComponent = () => {
  const [count, setCount] = useState(0);

  return (
    //<SafeAreaProvider>
    <View
      style={{ justifyContent: 'center', alignItems: 'center', height: 800 }}
    >
      <Text>{count}</Text>
      <Button OnPress={() => setCount(count + 1)} text="Increase" />
    </View>
    //</SafeAreaProvider>
  );
};

export default App;
