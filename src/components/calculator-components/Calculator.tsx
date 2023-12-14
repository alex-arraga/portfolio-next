"use client"

import { MathExpression, evaluate } from 'mathjs';
import { useEffect } from 'react';

import { useCalculatorContext } from '@/context/CalculatorContext';
import { Keyboard } from '..';


export function Calculator() {
    const { saveOperation,
        valueScreen,
        setValueScreen,
        lastResult,
        setLastResult } = useCalculatorContext();


    // Reg Exp
    const operators = /[+\-%^*,/]|[x÷!\√]/;
    const emptyBrackets = /\(\)|[\(\)]/;
    const validExpression = /^[0-9+\-*/^()%x÷√!lnlog,]+$/.test(valueScreen);
    const comma = /[,]/;

    // Validations
    const lastCharacter = valueScreen.slice(-1);
    const expressionInBrackets = emptyBrackets.test(valueScreen.slice(1, -1));
    const hasEmptyBrackets = emptyBrackets.test(valueScreen);
    const endsOperator = operators.test(lastCharacter);
    const endsComma = comma.test(lastCharacter);


    // Add '.' every 3 numbers
    useEffect(() => {
        const addPoints = /\B(?=(\d{3})+(?!\d))/g;
        const fotmatingScreen = valueScreen
            .replace(/\./g, '')
            .replace(addPoints, '.');

        if (fotmatingScreen !== valueScreen) {
            if ((!/,\d{3,}/.test(valueScreen))) {
                setValueScreen(fotmatingScreen)
            }
        }
    }, [valueScreen]);


    // Show in the screen
    const showValue = (value: string) => {
        const valueIsOperator = operators.test(value);

        if (typeof valueScreen === "string") {
            if (endsOperator && valueIsOperator) {
                setValueScreen(valueScreen.slice(0, -1) + value)
            } else if (valueScreen === 'Error' && value) {
                setValueScreen(value)
            }
            else {
                setValueScreen(valueScreen + value);
            }
        }
    };


    // Special keys 'Backspace' y 'r'
    const deleteAValue = () => {
        setValueScreen(() => valueScreen.slice(0, -1))
        if (valueScreen == 'Error') {
            setValueScreen('')
        }
    };


    // Last result 'ANS'
    const getLastResult = () => {
        if (lastResult === '') {
            alert('Sin registros de un último resultado')
        }
        setValueScreen(valueScreen + lastResult)
    };


    // Convert positive number to negative and reverse
    const changeSymbol = () => {
        const firstCharacter = valueScreen.slice(0, 1);
        const negativeNumber = /-/.test(firstCharacter);

        if (valueScreen && !negativeNumber && !endsOperator && !endsComma) {
            setValueScreen('-' + valueScreen)
        } else if (negativeNumber) {
            setValueScreen(valueScreen.replace('-', ''))
        } else if (endsOperator || endsComma) {
            return
        } else { setValueScreen(valueScreen) }
    };


    // Convert special symbols to operators readable by 'Math.js', so you can evaluate the result
    const convertExpression = () => {
        let convertValue = valueScreen;

        // ExpReg
        const expSquare = /√\(([^)]+)\)/g;
        const expLog = /log\((-?\d+(\.\d+)?)\)/g;
        const expLn = /ln\((-?\d+(\.\d+)?)\)/g;
        const expTan = /tan\((-?\d+(\.\d+)?)\)/g;
        const expCos = /cos\((-?\d+(\.\d+)?)\)/g;
        const expSin = /sin\((-?\d+(\.\d+)?)\)/g;

        // Valores fijos
        convertValue = convertValue.replace(/\./g, '');
        convertValue = convertValue.replace(/,/g, '.');
        convertValue = convertValue.replace(/x/g, '*');
        convertValue = convertValue.replace(/÷/g, '/');
        convertValue = convertValue.replace(/𝜋/g, Math.PI.toString());
        convertValue = convertValue.replace(/e/g, Math.E.toString());

        // Operaciones dinamicas
        convertValue = convertValue.replace(expSquare, (_: null, value: MathExpression) => {
            return Math.sqrt(evaluate(value)).toString();
        });

        convertValue = convertValue.replace(expLog, (_: null, value: MathExpression) => {
            return Math.log10(evaluate(value)).toString();
        });

        convertValue = convertValue.replace(expLn, (_: null, value: MathExpression) => {
            return Math.log(evaluate(value)).toString();
        });

        convertValue = convertValue.replace(expTan, (_: null, value: MathExpression) => {
            return Math.tan(evaluate(value)).toString();
        });

        convertValue = convertValue.replace(expCos, (_: null, value: MathExpression) => {
            return Math.cos(evaluate(value)).toString();
        });

        convertValue = convertValue.replace(expSin, (_: null, value: MathExpression) => {
            return Math.sin(evaluate(value)).toString();
        });

        return convertValue
    };


    // Eval results
    const calc = () => {
        if ((valueScreen || expressionInBrackets && validExpression && !hasEmptyBrackets))
            if (!endsOperator && !endsComma) {
                try {
                    // Evaluates the expression and transforms it again to a string
                    const result = evaluate(convertExpression()).toString();
                    const formatResult = result.replace('.', ',');
                    const finalResult = formatResult;
                    const endsCero = /,0$/.test(finalResult);

                    setValueScreen(finalResult)
                    setLastResult(finalResult)
                    saveOperation(valueScreen, finalResult)

                    if (endsCero) {
                        const roundedResult = finalResult.slice(0, -2);
                        setValueScreen(roundedResult)
                        setLastResult(roundedResult)
                        saveOperation(valueScreen, roundedResult);
                    }
                } catch {
                    setValueScreen('Error');
                    alert('Expresión no válida');
                }
            }
            else {
                setValueScreen('Error')
                alert('La expresión no puede terminar en un operador o en una coma')
            }
        else {
            alert('Ingrese una expresión')
        }
    };


    return (
        <Keyboard
            calc={calc}
            changeSymbol={changeSymbol}
            deleteAValue={deleteAValue}
            getLastResult={getLastResult}
            showValue={showValue}
        />
    )
}

export default Calculator