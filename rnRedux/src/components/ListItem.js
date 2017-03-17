import React, {Component, PropTypes} from 'react';
import {Text, View, TouchableWithoutFeedback, LayoutAnimation} from 'react-native';
import {CardSection} from './common'
import {connect} from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate(){
        LayoutAnimation.spring();
    }

    renderDescription(){
        const {library, expanded} = this.props;

        if (expanded) {
            return(
                <CardSection>
                    <Text>{library.description}</Text>
                </CardSection>
            )
        }
    }

    render() {
        const {titleStyle} = styles;
        const {id, title} = this.props.library;
        return(
            <TouchableWithoutFeedback
                onPress={()=>this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                            <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

ListItem.propTypes = {
    library: PropTypes.object,
    selectLibrary: PropTypes.func.isRequired,
    expanded: PropTypes.bool.isRequired
}

const styles = {
    textViewStyle:{
        height: 30,
        alignItems: 'center'
    },
    titleStyle:{
        fontSize: 18,
        paddingLeft: 15
    }
}

function mapStateToProps(state, ownProps) {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return {expanded}
}

export default connect(mapStateToProps, actions)(ListItem);
