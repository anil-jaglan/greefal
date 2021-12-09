import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { View, Text } from '../Themed';

import CounterButton from './CounterButton';

export default class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: this.props.start,
            beforeLoading: false,
        };
    }

    onPress(count, type) {
        const { onChangeBefore } = this.props;

        if (onChangeBefore) {
            return this.setState({ beforeLoading: true }, () => {
                onChangeBefore(() => {
                    return this.onChange(count, type);
                });
            });
        }

        return this.onChange(count, type);
    }

    onChange(count, type) {
        const { onChange } = this.props;

        return this.setState({ count, beforeLoading: false }, () => {
            return onChange && onChange(count, type);
        });
    }
    render() {

        const { count, beforeLoading } = this.state;
        const { countTextStyle } = this.props;

        return (
            <View style={styles.container}>
                <CounterButton
                    type="-"
                    count={this.state.count}
                    onPress={this.onPress.bind(this)}
                    disabled={beforeLoading}
                    {...this.props}
                />

                <View style={styles.count}>
                    <Text style={[styles.countText, countTextStyle]}>
                        {count}
                    </Text>
                </View>

                <CounterButton
                    type="+"
                    count={this.state.count}
                    onPress={this.onPress.bind(this)}
                    disabled={beforeLoading}
                    {...this.props}
                />
            </View>
        );
    }
}

Counter.propTypes = {
    minus: PropTypes.string,
    plus: PropTypes.string,

    start: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,


    onChange: PropTypes.func,
    onChangeBefore: PropTypes.func,

    minusIcon: PropTypes.func,
    plusIcon: PropTypes.func,

    buttonStyle: PropTypes.object,
    buttonTextStyle: PropTypes.object,
    countTextStyle: PropTypes.object,
};

Counter.defaultProps = {
    minus: '-',
    plus: '+',

    start: 0,
    min: 0,
    max: 10,

    minusIcon: null,
    plusIcon: null,

    buttonStyle: {},
    buttonTextStyle: {},
    countTextStyle: {},

    onChangeBefore: null
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    countText: {
        fontSize: 16,
        paddingLeft: 15,
        paddingRight: 15,
        color: '#000000',
    },
    count: {
        minWidth: 40,
        alignItems: 'center',
        justifyContent: 'center',
    }
});