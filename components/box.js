import React from 'react';
import { ImageBackground, ScrollView, Text, View } from 'react-native';


export default class extends Component{
    constructor(props) {
      super(props);
        this.state = {
          click: false,
    }

    }
    
    render(){
      return(
        <ImageBackground 
        style={styles.backimg}
        source={require(this.props.msg.img)}>
       <View style={styles.box}>
           <View >
            <Text style={style.title}>
                {this.props.msg.title}
            </Text>
           </View>
           <View >
                <Text style={style.time}>
                    {this.props.msg.time}
                </Text>
           </View>
       </View>
       </ImageBackground>
      )
    }
  }

  const {height,width}=Dimensions.get('window');
  const styles = StyleSheet.create({
    box:{
        marginBottom:10,
        backgroundColor:"gray",
        opacity:0.3,
        width:width,
        height:150
    },
    backimg:{
        flex:1
    },
    title:{
    textAlign:'center',
    lineHeight:90,
    width:width,
    height:90,
    fontSize:36,
    color:"white",
    },
    time:{
    textAlign:'center',
    lineHeight:60,
    width:width,
    height:60,
    fontSize:36,
    color:"white",
    }
    
  });
