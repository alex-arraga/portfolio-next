"use client"

import React from 'react'
import { Button } from './Button'
import { Screen } from './Screen'
import { Rows } from './Rows'
import { Container } from './Container'
import { FiDelete } from 'react-icons/fi';

import imgRaiz from '@/images/calculator/raiz-cuadrada.svg'
import imgPotencia from '@/images/calculator/potencia.svg'

import { useEffect, useState } from 'react'

export function Calculator() {
    const [valueScreen, setValueScreen] = useState('');
    const [history, setHistory] = useState([]);
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
                    <Button onClick={() => getLastResult()}>AC</Button>
                </Rows>
                <Rows>
                    <Button onClick={() => showValue('cos(')}>cos</Button>
                    <Button onClick={() => showValue('sin(')}>sin</Button>
                    <Button onClick={() => showValue('tan(')}>tan</Button>
                    <Button onClick={() => showValue('-')}>ANS</Button>
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
                    <Button onClick={() => showValue('convert')}>+/-</Button>
                    <Button onClick={() => showValue('0')}>0</Button>
                    <Button onClick={() => showValue(',')}>,</Button>
                    <Button onClick={() => showValue('=')}>=</Button>
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