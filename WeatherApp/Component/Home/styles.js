import { Dimensions,StyleSheet } from 'react-native'; 

var {height, width} = Dimensions.get('window');

export default  StyleSheet.create({

    contentContainer: {
      backgroundColor: '#FFF',
    },
  
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#FFF'
    },
  
    topView: {
      flex: 1.5,
    },
  
    centerView: {
      flex: 3,
      backgroundColor: '#FFF',
      marginTop: 5
    },
  
    bottomView: {
      flex: 0.3,
      backgroundColor: '#FFF',
      height: 10
    },
  
    button: {
      width: 120,
      height: 30,
      padding: 35, 
      borderRadius: 3,
      marginTop: 10,
      alignSelf: 'center',
      marginLeft: 90,
      marginTop: 15,
    },

    textBOx: {
      backgroundColor: "#ffffff",
      width: 200,
      height: 38,
      borderColor: 'gray',
      borderRadius: 5,
      borderWidth: 1,
      fontSize: 16,
      paddingLeft: 5,
      fontWeight: '300',
      fontSize: 15,
      marginTop: 5,
      marginRight : 20
    },

    subHeaderImage: {
      height: height,
      width: width,
      //marginTop: 50,
      //marginLeft: 20,
      //marginRight: 20, 
      //borderRadius:10, 
      backgroundColor: 'rgba(52, 52, 52, 0.7)',
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center', 
  },


  });
  