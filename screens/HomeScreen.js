import React from 'react';
import { Button } from 'react-native';

export default class MyHomeScreen extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Home',
    },
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}
