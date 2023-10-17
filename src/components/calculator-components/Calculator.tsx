"use client"

import { evaluate } from 'mathjs'

import React from 'react'
import { Button } from './Button'
import { Screen } from './Screen'
import { Rows } from './Rows'
import { Container } from './Container'
import { FiDelete } from 'react-icons/fi';

import { useEffect, useState } from 'react'

export function Calculator() {
    const [valueScreen, setValueScreen] = useState('');
    const [history, setHistory] = useState<Array<Record<string, any>>>([]);
    const [operationNumber, setOperationNumber] = useState(1);
    const [lastResult, setLastResult] = useState([]);

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
        setValueScreen(valueScreen + lastResult)
    };


    // Almacena una lista de objetos como registros en Historial
    const saveHistoy = (operationNumber: number, expression: string, result: number) => {
        const newRegister = {
            operationNumber,
            expression,
            result
        }
        // Recorre el array 'historial' y añade un nuevo registro al final
        setHistory([...history, newRegister]);
    };


    // Evaluar resultados
    const calc = () => {
        if ((valueScreen || expressionInBrackets && validExpression && !hasEmptyBrackets))
            if (!endsOperator && !endsComma) {
                try {
                    // Historial: Suma 1 a N°
                    const nOperacion = () => {
                        setOperationNumber(() => operationNumber + 1);
                        return operationNumber
                    };

                    const resultado = evaluate(valueScreen);
                    // const redondearDecimales = resultado.toFixed(1);
                    // const resultadoString = redondearDecimales.toString();

                    // No redondea decimales
                    const resultadoString = resultado.toString();

                    const resultadoFormateado = resultadoString.replace('.', ',');
                    const eliminarCeroFinal = /,0$/.test(resultadoFormateado);
                    const resFinal = resultadoFormateado;

                    if (eliminarCeroFinal) {
                        // Si termina en ',0' lo elimina y redondea
                        const resFinalDecimal = resFinal.slice(0, -2);

                        // Muestro el resultado de la expresion
                        setValueScreen(resFinalDecimal);

                        // Almacena el ultimo resultado (ANS)
                        setLastResult(resFinalDecimal);
                        // Pasa argumentos al objeto 'nuevoRegistro'
                        saveHistoy(nOperacion(), valueScreen, resFinalDecimal);
                    } else {
                        // Muestro el resultado de la expresion
                        setValueScreen(resFinal);

                        // Almacena el ultimo resultado (ANS)
                        setValueScreen(resFinal);
                        // Pasa argumentos al objeto 'nuevoRegistro'
                        saveHistoy(nOperacion(), valueScreen, resFinal);
                    }
                } catch {
                    setValueScreen('Error');
                    alert('Expresión no válida');
                }
            }
            else {
                setValueScreen('Error')
            }
        else {
            alert('Ingrese una expresión')
        }
    };


    return (
        <main className='flex justify-center items-center h-screen'>

            <Container>
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
                        √
                    </Button>
                    <Button onClick={() => showValue('^')}>
                        ^
                    </Button>
                </Rows>
                <Rows>
                    <Button onClick={() => showValue('(')}>(</Button>
                    <Button onClick={() => showValue(')')}>)</Button>
                    <Button onClick={() => showValue('%')}>%</Button>
                    <Button onClick={() => showValue('/')}>÷</Button>
                </Rows>
                <Rows>
                    <Button onClick={() => showValue('7')}>7</Button>
                    <Button onClick={() => showValue('8')}>8</Button>
                    <Button onClick={() => showValue('9')}>9</Button>
                    <Button onClick={() => showValue('*')}>x</Button>
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
                    <Button onClick={() => showValue('convert')}>+/-</Button>
                    <Button onClick={() => showValue('0')}>0</Button>
                    <Button onClick={() => showValue(',')}>,</Button>
                    <Button onClick={() => calc()}>=</Button>
                </Rows>

            </Container>
        </main>
    )
}

export default Calculator




/*
           
            <div className='historial'>
                <Historial
                    historial={historial}
                    setHistorial={setHistorial}
                    numeroOperacion={numeroOperacion}
                    setNumeroOperacion={setNumeroOperacion}
                    setValorPantalla={setValorPantalla}
                />
            </div>
        </div>

*/