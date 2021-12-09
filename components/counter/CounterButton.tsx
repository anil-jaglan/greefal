import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class CounterButton extends React.Component {

    constructor(props: any) {
        super(props);
    }

    onPress() {
        const { count, type } = this.props;
        const number = this.isMinus() ? count - 1 : count + 1;

        return this.props.onPress(number, type);
    }
    isMinus() {
        return this.props.type === '-';
    }

    isPlus() {
        return this.props.type === '+';
    }

    isDisabled() {
        const { min, max, count, disabled } = this.props;

        if (disabled) {
            return true;
        }

        return (this.isMinus() ? min : max) === count;
    }

    icon() {
        const { minusIcon, plusIcon, buttonTextStyle, minus, plus } = this.props;
        const icon = this.isMinus() ? minusIcon : plusIcon;

        if (icon) {
            return icon(this.isDisabled());
        }

        return (
            <Text style={[styles.buttonText, buttonTextStyle]}>
                {this.isMinus() ? minus : plus}
            </Text>
        );
    }

    render() {
        const { buttonStyle } = this.props;
        const style = {
            opacity: this.isDisabled() ? 0.2 : 1,
            ...buttonStyle,
        };
        return (
            <TouchableOpacity
                style={[styles.touchable, style]}
                onPress={this.onPress.bind(this)}
                disabled={this.isDisabled()}
            >
                {this.icon()}
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    touchable: {
        minWidth: 35,
        minHeight: 35,
        borderWidth: 1,
        borderColor: '#dedede',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#000000',
    },
});