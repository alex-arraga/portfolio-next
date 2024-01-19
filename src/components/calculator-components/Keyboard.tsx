"use client"

import Image from 'next/image'
import { useCalculatorContext } from '@/context/CalculatorContext'
import { useEffect, useState } from 'react'
import {
    CalculatorContainer,
    Screen,
    Button,
    Rows,
    Powers,
    SquareRoot,
    PlusMinus
} from "../index"
import { KeyboardProps } from '@/types/calculator'

function Keyboard({
    calc,
    changeSymbol,
    deleteAValue,
    showValue,
    getLastResult
}: KeyboardProps) {

    const context = useCalculatorContext()
    const valueScreen = context?.valueScreen ?? ''
    const [hasNavigator, setHasNavigator] = useState(false)

    useEffect(() => {
        setHasNavigator(true)
    })

    // Validation: Browser or Mobile
    const isMobileDevice = hasNavigator ? /Mobi|Android|iPhone|Phone|BlackBerry|iPad/i.test(navigator?.userAgent) : '';

    // Touch Devices Events
    useEffect(() => {
        if (isMobileDevice) {
            const handleTouchEvent = (event: TouchEvent) => {
                const touchX = event.touches[0].clientX;
                const touchY = event.touches[0].clientY;

                const key = document.elementFromPoint(touchX, touchY)?.textContent;
            };

            // Agregar el event listener para eventos táctiles
            window.addEventListener('touchstart', handleTouchEvent);

            // Retirar el event listener al desmontar el componente
            return () => {
                window.removeEventListener('touchstart', handleTouchEvent);
            };
        }
    }, [valueScreen, isMobileDevice])


    // Keyboard Events
    useEffect(() => {
        if (!isMobileDevice) {
            const handleKeyDownEvent = (eventKey: KeyboardEvent) => {
                const key = eventKey.key
                const numbers = Number(key) >= 0 && Number(key) <= 9;
                if (numbers === true) {
                    showValue(key)
                } else {
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
                        case 'q':
                        case 'Q':
                            getLastResult()
                            break;
                        default:
                            break;
                    }
                }
            }

            window.addEventListener('keydown', handleKeyDownEvent)

            return () => {
                window.removeEventListener('keydown', handleKeyDownEvent)
            }
        }
    }, [valueScreen, isMobileDevice]);


    if (context) {
        const setValueScreen = context.setValueScreen
        const modalIsVisible = context.modalIsVisible


        return (
            <section className={`flex ${modalIsVisible === true ? '-z-10' : 'z-10'} justify-center items-center h-screen`}>
                <CalculatorContainer>
                    <div className='max-w-[240px] sm:max-w-[280px] md:max-w-xs'>
                        <Screen value={valueScreen} />

                        <Rows>
                            <Button onClick={() => showValue('ln(')}>ln</Button>
                            <Button onClick={() => showValue('log(')}>log</Button>
                            <Button onClick={() => deleteAValue()}>
                                <Image
                                    src={'/delete-a-number.svg'}
                                    alt='delete a number'
                                    width={25}
                                    height={25}
                                    className='object-contain h-5 w-5 sm:h-6 sm:w-6'
                                />
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
                            <Button isNumber={true} onClick={() => showValue('7')}>7</Button>
                            <Button isNumber={true} onClick={() => showValue('8')}>8</Button>
                            <Button isNumber={true} onClick={() => showValue('9')}>9</Button>
                            <Button onClick={() => showValue('x')}>x</Button>
                        </Rows>
                        <Rows>
                            <Button isNumber={true} onClick={() => showValue('4')}>4</Button>
                            <Button isNumber={true} onClick={() => showValue('5')}>5</Button>
                            <Button isNumber={true} onClick={() => showValue('6')}>6</Button>
                            <Button onClick={() => showValue('-')}>-</Button>
                        </Rows>
                        <Rows>
                            <Button isNumber={true} onClick={() => showValue('1')}>1</Button>
                            <Button isNumber={true} onClick={() => showValue('2')}>2</Button>
                            <Button isNumber={true} onClick={() => showValue('3')}>3</Button>
                            <Button onClick={() => showValue('+')}>+</Button>
                        </Rows>
                        <Rows>
                            <Button onClick={() => changeSymbol()}>
                                <PlusMinus />
                            </Button>
                            <Button isNumber={true} onClick={() => showValue('0')}>0</Button>
                            <Button onClick={() => showValue(',')}>,</Button>
                            <Button onClick={() => calc()}>=</Button>
                        </Rows>

                    </div>
                </CalculatorContainer>
            </section>
        )
    }
}


export default Keyboard