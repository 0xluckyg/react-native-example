import React, {PropTypes} from 'react';
import {Text, View} from 'react-native';

const Header = ({headerText}) => {
    Header.propTypes = {
        headerText:PropTypes.string
    }

    const {fontStyle, viewStyle} = styles;

    return(
        <View style={viewStyle}>
            <Text style={fontStyle}>{headerText}</Text>
         </View>
    )
}

const styles = {
    viewStyle:{
        backgroundColor:'#F8F8F8',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        paddingTop:15,
        shadowColor: '#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.2,
        elevation: 2,
        position:'relative'

    },
    fontStyle:{
        fontSize:20
    }
}

export default Header;
