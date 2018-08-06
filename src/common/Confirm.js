import React from 'react';
import {Text, View, Modal} from 'react-native'
import {CardSection} from "./CardSection";
import {Button} from "./Button";


const Confirm = ({children, visible, onAccept, onDecline}) => {

    return (
        <Modal
            animationType = "slide"
            transparent
            visible = {visible}
            onRequestClose = {() =>{}}
        >
            <View style = {styles.modalContainerStyle}>
                <CardSection style = {styles.cardSectionStyle}>
                    <Text style = {styles.textStyle}>
                        {children}
                    </Text>
                </CardSection>

                <CardSection>
                    <Button onPress = {onAccept}>
                        Yes
                    </Button>
                    <Button onPress = {onDecline}>
                        No
                    </Button>
                </CardSection>
            </View>
        </Modal>
    )
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center',
        marginLeft: 30,
        marginRight: 30,
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40,
    },
    modalContainerStyle: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
    },
};


export {Confirm};