import React from 'react';
import { Button } from 'react-native';

export default class CameraScreen extends React.Component {
  static navigationOptions = {
    tabBar: {
      label: 'Camera',
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
