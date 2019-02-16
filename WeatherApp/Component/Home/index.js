import React from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux'
import FileJSON from '../../JsonFile/Step1.json';
import styles from './styles'
import { getWeatherInfoFromApi } from '../../Action/getInformation'
import { storeCityCode } from '../../Action/reducerAction'
import CityCodeInfo from '../../Component/CityCodeInfo'
import WeatherInfo from '../../Component/WeatherInfo'

//Extract City codes from 'Step1.json' (attached) file and load it into an array.
const info = FileJSON.List;
const cityCodeArray = info.map(x => x.CityCode); //Map Function ES6 
const cityNameArray = info.map(x => x.CityName);


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            weatherInfo: {},
            popupBoxVisible: false,
            cityCode: null
        };
    }


    static navigationOptions = {
        title: 'Weather Information',
        headerStyle: {
            backgroundColor: '#2F95D6',
        }
    }

    componentWillMount() {
        this.props.findAvailablCityCode(cityCodeArray);

    }

    getInformation(cityCode) {
        getWeatherInfoFromApi(cityCode)
            .then((data) => {
                this.setState({ weatherInfo: data, popupBoxVisible: true })
            });
    }

    popupBoxState = (state) => {
        this.setState({ popupBoxVisible: state });
    }


    buttonOnPress() {
        (this.state.cityCode == null || this.state.cityCode == '' ? alert('Required City code') : this.getInformation(this.state.cityCode))
    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ backgroundColor: '#0088cc', height: 80, }}>
                        <Text style={{ marginLeft: 10, marginTop: 40, marginBottom: 2, fontSize: 20, fontWeight: '500', color: "#FFF" }}>Weather Information</Text>
                    </View>

                    <View style={styles.topView}>
                        <View style={{ marginTop: 25, marginBottom: 4, marginLeft: 5, marginRight: 5, borderWidth: 1, borderRadius: 5, borderColor: '#404040', backgroundColor: '#fff' }}>
                            <View style={{ marginLeft: 20, marginTop: 8, marginBottom: 10, flexDirection: "row" }}>
                                <TextInput style={styles.textBOx} placeholder='City Code' onChangeText={(cityCode) => this.setState({ cityCode })} value={this.state.cityCode} /> 
                                <Button title="Search" onPress={() => this.buttonOnPress()} buttonStyle={{width: 100, backgroundColor: '#0088cc', borderRadius:8}} />
                            </View>
                        </View>
                    </View>


                    <View style={styles.centerView}>

                        <Text style={{ marginTop: 10, marginBottom: 4, marginLeft: 15, marginRight: 5, fontSize: 20, color: '#4d4d4d' }}>Available city codes</Text>
                        {(this.props.availableCityCodes == null) ? <Text>Not available City Codes </Text> :
                            this.props.availableCityCodes.map((key, i) => <TouchableOpacity onPress={() => this.getInformation(key)} ><CityCodeInfo cityCode={key} cityName={cityNameArray[i]} /></TouchableOpacity>)}

                    </View>


                    <View style={styles.bottomView}>
                    </View>
                </ScrollView>
                {(this.state.popupBoxVisible == true) ?
                    <View style={styles.subHeaderImage}>
                        <WeatherInfo getpopupBoxState={this.popupBoxState} name={this.state.weatherInfo.name} id={this.state.weatherInfo.id} name={this.state.weatherInfo.name} temp={this.state.weatherInfo.main.temp} description={this.state.weatherInfo.weather[0].description} />
                    </View>
                    : null}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        availableCityCodes: state.cityCodes,
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        findAvailablCityCode: (array) => dispatch(storeCityCode(array)),
    }
}


export default connect(mapStateToProps, mapDispatchtoProps)(Home);


