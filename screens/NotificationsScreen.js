import React from 'react';
import { Button } from 'react-native';

export default class NotificationsScreen extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Notifications',
    },
  }

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Home')}
        title="Go back home"
      />
    );
  }
}
