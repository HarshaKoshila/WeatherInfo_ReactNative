import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



class CityCodeInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', height: 40, width: 250, marginBottom: 3, marginTop: 1, borderWidth: 1, borderColor: '#0088cc', borderRadius: 8, marginLeft: 5, marginRight: 5, backgroundColor: '#fff', }}>
          <Text>{this.props.cityName} : {this.props.cityCode}</Text>
        </View>
      </View>
    );
  }
}

export default CityCodeInfo;

