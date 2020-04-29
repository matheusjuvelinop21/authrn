import * as React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {useAuth} from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

const Dashboard: React.FC = () => {
  const {signOut} = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign out" onPress={handleSignOut} />
    </View>
  );
};

export default Dashboard;
