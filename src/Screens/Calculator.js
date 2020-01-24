import React, { Component,useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from "react-native";

function Calculator() {    

    const [ resultText, setResultText ] = useState('');
    const [ calculationText, setCalculationText ] = useState('');

    const operations = ['DEL', '+', '-', '*', '/'];
    
    const calculationResult = () => {
        const text = resultText;
        setCalculationText(eval(text));
    }

    const validate = () => {
        const text = resultText
        switch (text.slice(-1)) {
            case '+':

            case '-':

            case '*':

            case '/':
                return false
        }
        return true
    }

    const _onPressButton = (text) => {
        if (text == '=') {
            return validate() && calculationResult(resultText);
        }
        setResultText(resultText + text);
    }

    const operate = (operation) => {
        switch (operation) {
            case 'DEL':
                let text = resultText.split('');
                text.pop();
                setResultText(text.join(''));
                break
                case '+':

                case '-':

                case '*':

                case '/':

                const lastChar = resultText.split('').pop()

                if (operations.indexOf(lastChar) > 0) return

                if (text == "") return
                setResultText(resultText + operation);
        }
    }

    let rows = [];
        let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']];
        for (let i = 0; i < 4; i++) {
            let row = [];
            for (let j = 0; j < 3; j++) {
                row.push(
                    <TouchableOpacity
                        key={(nums, i) => nums[i]}
                        style={styles.btn}
                        onPress={() => _onPressButton(nums[i][j])}
                    >
                        <Text key={i} style={styles.btnText}>{nums[i][j]}</Text>
                    </TouchableOpacity>
                );
            }
            rows.push(<View key={i} style={styles.row}>{row}</View>);
        }
        let ops = [];
        for (let k = 0; k < 5; k++) {
            ops.push(
                <TouchableOpacity
                    key={operations}
                    style={styles.btn}
                    onPress={() => operate(operations[k])}>
                    <Text key={k} style={[styles.btnText, styles.white]}>
                        {operations[k]}
                    </Text>
                </TouchableOpacity>
            );
        }
    
        return (
            <View style={styles.container}>
                <View style={styles.result}>
                    <Text style={styles.resultText}>{resultText}</Text>
                </View>
                <View style={styles.calculation}>
                    <Text style={styles.calculationText}>{calculationText} </Text>

                </View>
                <View style={styles.buttons}>
                    <View style={styles.numbers}>{rows}</View>
                    <View style={styles.operations}>{ops}</View>

                </View>
            </View>
        );
}

export default Calculator;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    resultText: {
        fontSize: 25,
        paddingRight: 10,
        color: 'black'
    },
    btnText: {
        fontSize: 40,
        color: 'white'
    },
    white: {
        color: 'white'
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    result: {
        flex: 2,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    calculation: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    calculationText: {
        fontSize: 50,
        paddingRight: 10,
        color: 'black'
    },
    buttons: {
        flex: 7,
        flexDirection: 'row'
    },
    numbers: {
        flex: 3,
        padding: 1,
        backgroundColor: '#1e2326'
    },
    operations: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        backgroundColor: '#686868'
    }
});


