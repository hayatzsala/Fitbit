const React = require("react-native");

const { StyleSheet } = React;

export default{
	mainContainer: {
       // marginBottom: 20,
        //flexDirection: 'column',

    }
    ,backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    height:600

    
  },
  form : {
  	flex: 1,
  	flexDirection: 'column',
  	alignItems: 'center',


  },
  logoImage : {
  	//aligment:'center',
  	width:"60%",
  	height:75,
  	marginTop: 70,
 	 marginBottom: 45,
  //alignItems: 'center'
  },
  textStyle:{
  	height: 43,
  	width:"75%",
  fontSize: 14,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#eaeaea',
  backgroundColor: '#fafafa',
  paddingLeft: 10,
  marginLeft: 15,
  marginRight: 15,
  marginTop: 5,
  marginBottom: 5,
  },
  loginButton:{
  	 backgroundColor: '#003333',
    borderRadius: 5,
    height: 35,
    width:"75%",
     marginTop: 10,
     marginBottom: 20,
  },
  hairline: {
  
  backgroundColor: '#A2A2A2',
  height: 2,
  width: "75%",
  //alignSelf:'stretch',
},
orStyle:{
	color:'#5f5f5f',
	fontSize:18,
	
},
pStyle:{
  color:'#ffffff',
  fontSize:16,
  
},
welcomeStyle:{
	
 	 flex: 1,
  	flexDirection: 'column',
  	alignItems: 'center',
    marginLeft:15,
    marginRight:15,
    
},
welcomeLogo:{
	width:"60%",
  	height:110,
  	marginTop: 60,
    marginBottom:30
},
createStyle:{
	color:'blue',
	fontSize:16,
	marginBottom: 20,
},
signUpview : {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    
   // marginTop:70
  },
  signUpButton:{
    backgroundColor: '#003333',
    borderRadius: 5,
    height: 35,
    width:"50%",
     marginTop: 20,
     marginBottom: 20,
  },
  iconStyle:{
    marginTop:15,
    marginLeft:10
  },
  AcheStyle:{
    backgroundColor:'white',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',

  },
  labelText:{
    padding:25,
    fontSize:16
  },
  labelStyle:{
    flex:1,
     flexDirection: 'row',
      marginBottom: 20,
  },
  labelImage:{
    width:50,
    height:50
  },
buttonStyle:{
   marginTop:10,
    height:60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:330,
    borderRadius:30,
    backgroundColor: "#f1f9f9",
},
header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'flex-start',
    position: 'absolute',
    marginLeft:20,
    marginTop:130,
    backgroundColor:'white'
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,

  },
  bodyContent: {
    flex: 1,
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems: 'center',
    marginLeft:10,
    marginRight:10
    //padding:15,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:'50%',
    borderRadius:30,
    backgroundColor: "#FFFFFF",
    borderColor:'black',
    borderWidth:2
  },
  nameContainer:{
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:140,
    borderRadius:30,
    backgroundColor: "#FFFFFF",
    alignSelf:'flex-end',
    marginRight:25
  },
  BMIStyle:{
    marginRight:120,
    color:'white',
    fontSize:16

  },
  valueStyle:{
    color:'#6ac3db',
    fontSize:16,
    
  },
  Test:{
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:140,
    borderRadius:30,
    backgroundColor: "#FFFFFF",
    alignSelf:'flex-end',
    marginRight:25
  }

}