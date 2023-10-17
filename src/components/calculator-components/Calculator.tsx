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



    const [lastResult, setLastResult] = useState('');




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
        setValueScreen(valueScreen + lastResult)
    };


    // Almacena una lista de objetos como registros en Historial
    const saveHistoy = (id_operation: number, expression: string, result: number) => {
        const newRegister = {
            id_operation,
            expression,
            result
        }
        // Recorre el array 'historial' y añade un nuevo registro al final
        console.log(newRegister)
        setHistory([...history, newRegister]);
    };


    // Evaluar resultados
    const calc = () => {
        if ((valueScreen || expressionInBrackets && validExpression && !hasEmptyBrackets))
            if (!endsOperator && !endsComma) {
                try {
                    // Historial: Suma 1 a N°
                    const nOperation = () => {
                        setOperationNumber(() => operationNumber + 1);
                        return operationNumber
                    };

                    const result = evaluate(valueScreen);

                    // Convierte el resultado en string nuevamente
                    const stringResult = result.toString();

                    const formatResult = stringResult.replace('.', ',');
                    const deleteCero = /,0$/.test(formatResult);
                    const finalResult = formatResult;

                    setLastResult(finalResult)


                    if (deleteCero) {
                        // Si termina en ',0' lo elimina y redondea
                        const roundedResult = finalResult.slice(0, -2);

                        // Muestro el resultado de la expresion
                        setValueScreen(roundedResult)

                        // Almacena el ultimo resultado (ANS)
                        setLastResult(roundedResult)

                        // Pasa argumentos al objeto 'nuevoRegistro'
                        saveHistoy(nOperation(), valueScreen, roundedResult);

                    } else {
                        // Muestro el resultado de la expresion
                        setValueScreen(finalResult);

                        // Almacena el ultimo resultado (ANS)
                        setValueScreen(finalResult);

                        // Pasa argumentos al objeto 'nuevoRegistro'
                        saveHistoy(nOperation(), valueScreen, finalResult);
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