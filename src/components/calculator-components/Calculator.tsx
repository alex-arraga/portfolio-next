"use client"

import { evaluate } from 'mathjs';
import { useRouter } from 'next/navigation';

import { Button } from './Button';
import { Screen } from './Screen';
import { Rows } from './Rows';
import { CalcContainer } from './CalcContainer';
import { FiDelete } from 'react-icons/fi';

import React from 'react'
import { useEffect, useState } from 'react';

import Powers from '@/assets/icons/calculator/Powers';
import PlusMinus from '@/assets/icons/calculator/PlusMinus';
import SquareRoot from '@/assets/icons/calculator/SquareRoot';
import { baseURL } from '@/libs/baseURL';


export function Calculator() {
    const [valueScreen, setValueScreen] = useState('');
    // const [operationNumber, setOperationNumber] = useState(1);
    const [lastResult, setLastResult] = useState('');
    const router = useRouter()

    // Reg Exp
    const operators = /[+\-%^*,/]|[x÷√!]/;
    const emptyBrackets = /\(\)|[\(\)]/;
    const validExpression = /^[0-9+\-*/^()%x÷√!lnlog,]+$/.test(valueScreen);
    const comma = /[,]/;

    // Validations
    const lastCharacter = valueScreen.slice(-1);
    const expressionInBrackets = emptyBrackets.test(valueScreen.slice(1, -1));
    const hasEmptyBrackets = emptyBrackets.test(valueScreen);
    const endsOperator = operators.test(lastCharacter);
    const endsComma = comma.test(lastCharacter);

    // Agrega '.' cada 3 numeros
    useEffect(() => {
        // ExpReg para agregar puntos cada tres dígitos
        const colocarPuntos = /\B(?=(\d{3})+(?!\d))/g;
        const fotmatingScreen = valueScreen
            // Elimina los puntos existentes antes de hacer el proximo reemplazo
            .replace(/\./g, '')
            // Agrega los puntos siempre que la condicion se cumpla
            .replace(colocarPuntos, '.');

        // Actualizar el estado solo si es necesario (evitar bucle infinito)
        if (fotmatingScreen !== valueScreen) {
            if ((!/,\d{3,}/.test(valueScreen))) {
                setTimeout(() => setValueScreen(fotmatingScreen), 100)
            }
        }
    }, [valueScreen]);


    // Show in the screen
    const showValue = (value: string) => {
        const valueIsOperator = operators.test(value);
        if (typeof valueScreen === "string") {
            if (endsOperator && valueIsOperator) {
                setValueScreen(valueScreen.slice(0, -1) + value)
            } else {
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
    }


    // Ultimo Resultado 'ANS'
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
    }


    // Convierte simbolos especiales a operadores legibles por 'Math.js', asi puede evaluar el resultado
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
        convertValue = convertValue.replace(expSquare, (_, value) => {
            return Math.sqrt(evaluate(value)).toString();
        });

        convertValue = convertValue.replace(expLog, (_, value) => {
            return Math.log10(evaluate(value)).toString();
        });

        convertValue = convertValue.replace(expLn, (_, value) => {
            return Math.log(evaluate(value)).toString();
        });

        convertValue = convertValue.replace(expTan, (_, value) => {
            return Math.tan(evaluate(value)).toString();
        });

        convertValue = convertValue.replace(expCos, (_, value) => {
            return Math.cos(evaluate(value)).toString();
        });

        convertValue = convertValue.replace(expSin, (_, value) => {
            return Math.sin(evaluate(value)).toString();
        });

        return convertValue
    };


    // Evaluar resultados
    const calc = () => {
        if ((valueScreen || expressionInBrackets && validExpression && !hasEmptyBrackets))
            if (!endsOperator && !endsComma) {
                try {
                    // Evaluates the expression and transforms it again to a string
                    const result = evaluate(convertExpression()).toString();
                    const formatResult = result.replace('.', ',');
                    const finalResult = formatResult;
                    const endsCero = /,0$/.test(finalResult);

                    // Show the result of expression
                    setValueScreen(finalResult)

                    // Save the last result (ANS)
                    setLastResult(finalResult)

                    // Send arguments to create a 'new register' object
                    saveOperation(valueScreen, finalResult)

                    router.refresh()

                    if (endsCero) {
                        const roundedResult = finalResult.slice(0, -2);

                        setValueScreen(roundedResult)
                        setLastResult(roundedResult)
                        saveOperation(valueScreen, roundedResult);
                        router.refresh()
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


    // Keyboard
    useEffect(() => {
        window.onkeydown = eventKey => {
            const key = eventKey.key
            const validarNum = Number(eventKey.key) >= 0 && Number(eventKey.key) <= 9;
            if (validarNum) {
                setValueScreen(valueScreen + key)
            } else if (key) {
                switch (key) {
                    case '(':
                    case ')':
                    case '+':
                    case '-':
                    case ',':
                    case '%':
                    case '^':
                        showValue(key)
                        break;
                    case '*':
                        showValue(key.replace(/\*/g, 'x'));
                        break;
                    case '/':
                        showValue(key.replace(/\//g, '÷'));
                        break;
                    case 'Enter':
                        calc()
                        break;
                    case 'Backspace':
                        deleteAValue()
                        break;
                    case 'r':
                    case 'R':
                        getLastResult()
                        break;
                    default:
                        break;
                }
            }
        };
    }, [])


    // Almacena una lista de objetos como registros en Historial
    const saveOperation = async (expression: string, result: number) => {
        try {
            const data = {
                expression,
                result
            }

            const response = await fetch(`${baseURL}/calculator`, {
                method: 'POST',
                body: JSON.stringify(data),
                credentials: 'include'
            })
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <section className='flex justify-center items-center h-screen'>
            <CalcContainer>
                <Screen value={valueScreen} />

                <Rows>
                    <Button onClick={() => showValue('ln(')}>ln</Button>
                    <Button onClick={() => showValue('log(')}>log</Button>
                    <Button onClick={() => deleteAValue()}>
                        <FiDelete></FiDelete>
                    </Button>
                    <Button onClick={() => setValueScreen('')}>AC</Button>
                </Rows>
                <Rows>
                    <Button onClick={() => showValue('cos(')}>cos</Button>
                    <Button onClick={() => showValue('sin(')}>sin</Button>
                    <Button onClick={() => showValue('tan(')}>tan</Button>
                    <Button onClick={() => getLastResult()}>ANS</Button>
                </Rows>
                <Rows>
                    <Button onClick={() => showValue('𝜋')}>𝜋</Button>
                    <Button onClick={() => showValue('e')}>e</Button>
                    <Button onClick={() => showValue('√(')}>
                        <SquareRoot />
                    </Button>
                    <Button onClick={() => showValue('^')}>
                        <Powers />
                    </Button>
                </Rows>
                <Rows>
                    <Button onClick={() => showValue('(')}>(</Button>
                    <Button onClick={() => showValue(')')}>)</Button>
                    <Button onClick={() => showValue('%')}>%</Button>
                    <Button onClick={() => showValue('÷')}>÷</Button>
                </Rows>
                <Rows>
                    <Button onClick={() => showValue('7')}>7</Button>
                    <Button onClick={() => showValue('8')}>8</Button>
                    <Button onClick={() => showValue('9')}>9</Button>
                    <Button onClick={() => showValue('x')}>x</Button>
                </Rows>
                <Rows>
                    <Button onClick={() => showValue('4')}>4</Button>
                    <Button onClick={() => showValue('5')}>5</Button>
                    <Button onClick={() => showValue('6')}>6</Button>
                    <Button onClick={() => showValue('-')}>-</Button>
                </Rows>
                <Rows>
                    <Button onClick={() => showValue('1')}>1</Button>
                    <Button onClick={() => showValue('2')}>2</Button>
                    <Button onClick={() => showValue('3')}>3</Button>
                    <Button onClick={() => showValue('+')}>+</Button>
                </Rows>
                <Rows>
                    <Button onClick={() => changeSymbol()}>
                        <PlusMinus />
                    </Button>
                    <Button onClick={() => showValue('0')}>0</Button>
                    <Button onClick={() => showValue(',')}>,</Button>
                    <Button onClick={() => calc()}>=</Button>
                </Rows>

            </CalcContainer>
        </section>
    )
}

export default Calculator