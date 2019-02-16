import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';



class CityCodeInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            weatherIcon: null
        };
    }

    componentWillMount(){
        this.changeWeatherIcon(this.props.description)
    }

    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    closePopupBox = () => {
        this.props.getpopupBoxState(false);
    }

    changeWeatherIcon(description) {
        if (description == "light rain")
            this.setState({ weatherIcon: 'https://www.mikeafford.com/store/store-images/ww01_example_light_rain_showers.png' })
        else if (description == "few clouds")
            this.setState({ weatherIcon: 'http://2.bp.blogspot.com/-ygC76vOOb8I/T_hcQOiHJEI/AAAAAAAACCk/3qCnCtkhfxE/s320/bluesky.jpg' })
        else if (description == "scattered clouds")
            this.setState({ weatherIcon: 'http://4.bp.blogspot.com/-l7O45LDVvNE/TxeeY8z9WzI/AAAAAAAAALY/nbAatGs-kRk/s400/Scattered+Clouds+6-09_865.jpg' })
        else
            this.setState({ weatherIcon: 'https://static.diffen.com/uploadz/7/79/Weather-1.jpg' })

    }

    render() {
        return (
            <View style={{ flexDirection: 'row', marginBottom: 3, marginTop: 1, borderWidth: 1, borderColor: '#0088cc', borderRadius: 8, marginLeft: 15, marginRight: 15, backgroundColor: '#fff', }}>
                <View style={{ flex: 1, marginTop: 3 }}>
                    <Image
                        style={{ marginTop: 10, marginLeft: 10, width: 100, height: 100, borderRadius: 100, }}
                        source={{ uri: this.state.weatherIcon }}
                    />
                    <Text style={{ marginLeft: 30, marginBottom: 10, fontSize: 13, fontWeight: '100', color: "#000" }}>{this.Capitalize(this.props.name)}</Text>
                </View>

                <View style={{ flex: 2, marginTop: 0, marginLeft: 20 }}>
                    <TouchableOpacity style={{ marginLeft: 170 }} onPress={this.closePopupBox}>
                        <Ionicons name="ios-close-circle-outline" size={35} color='red' />
                    </TouchableOpacity>
                    <Text style={{ marginLeft: 5,marginBottom: 5, fontSize: 12, color: "#404040" }}>ID : {this.props.id}</Text>
                    <Text style={{ marginLeft: 5, marginBottom: 5, fontSize: 12, color: "#404040" }}>Description  : {this.Capitalize(this.props.description)}</Text>
                    <Text style={{ marginLeft: 5, fontSize: 12, color: "#404040" }}>Temperature : {this.props.temp}</Text>
                </View>
            </View>
        );
    }
}

export default CityCodeInfo;

