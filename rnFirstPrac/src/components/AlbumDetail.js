import React,{PropTypes} from 'react';
import { Text, Image, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) => {
    AlbumDetail.propTypes = {
        album: PropTypes.object
    }

    const {title, artist, thumbnail_image, image, url} = album;
    const {imageViewStyle, textView, imageStyle, mainImageStyle} = styles;


    return (
        <Card>
            <CardSection>
                <View style={imageViewStyle}>
                    <Image source={{uri:thumbnail_image}} style={imageStyle}></Image>
                </View>
                <View style={textView}>
                    <Text>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image source={{uri:image}} style={mainImageStyle}></Image>
            </CardSection>
            <CardSection>
                <Button onPress={() => {Linking.openURL(url)}}>
                    BUY NOW
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    imageViewStyle:{
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle:{
        width:50,
        height:50,
        borderRadius: 25
    },
    mainImageStyle:{
        height: 300,
        width: null,
        flex: 1,
    },
    textView:{
        flexDirection:'column',
        justifyContent:'space-between'
    }
}

export default AlbumDetail;
