import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { DispatchStore, RootState } from './store/store';

export default function Home() {
  const dispatch = useDispatch<DispatchStore>();
  const store = useSelector((state: RootState) => state.users.users);

  React.useEffect(() => {
    const load = async () => {
      await dispatch.users.getUsers();
      console.log('printou depois da request e 5s');
    };

    load();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app Manoel!</Text>
      {store.map((user) => (
        <Text key={user.id}>{user.first_name}</Text>
      ))}
      <StatusBar style="auto" />
    </View>
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
