"use client"

import React from 'react'
import { Button } from './Button'
import { Screen } from './Screen'
import { Rows } from './Rows'

import { useEffect, useState } from 'react'

export function Calculator() {
    const [valueScreen, setValueScreen] = useState('0')

    return (
        <div className='flex-col justify-center items-center rounded-md w-96 h-2/3 bg-gray-500'>
            <Screen value={valueScreen} />

            <Rows>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
            </Rows>
        </div>
    )
}

export default Calculator




/*

        <div className='calculadora'>
            <Pantalla input={valorPantalla} manejarEnvio={calcularResultado} />
            <div className='filas'>
                <Boton accionClick={() => mostrar('ln(')}>ln</Boton>
                <Boton accionClick={() => mostrar('log(')}>log</Boton>
                <Boton accionClick={borrarUnValor}>
                    <FiDelete></FiDelete>
                </Boton>
                <Boton accionClick={() => setValorPantalla('')}>AC</Boton>
            </div>
            <div className='filas'>
                <Boton accionClick={() => mostrar('cos(')}>cos</Boton>
                <Boton accionClick={() => mostrar('sin(')}>sin</Boton>
                <Boton accionClick={() => mostrar('tan(')}>tan</Boton>
                <Boton accionClick={() => recuperarUltimoResultado()}>ANS</Boton>
            </div>
            <div className='filas'>
                <Boton accionClick={mostrar}>𝜋</Boton>
                <Boton accionClick={mostrar}>e</Boton>
                <Boton accionClick={() => mostrar('√(')}>
                    <img className='img-raiz' src={imagenRaiz} alt='Raiz cuadrada' />
                </Boton>
                <Boton accionClick={() => mostrar('^')}>
                    <img className="img-potencia" src={imgPotencia} alt="potencia" />
                </Boton>
            </div>
            <div className='filas'>
                <Boton accionClick={mostrar}>(</Boton>
                <Boton accionClick={mostrar}>)</Boton>
                <Boton accionClick={mostrar}>%</Boton>
                <Boton accionClick={mostrar}>÷</Boton>
            </div>
            <div className='filas'>
                <Boton accionClick={mostrar}>7</Boton>
                <Boton accionClick={mostrar}>8</Boton>
                <Boton accionClick={mostrar}>9</Boton>
                <Boton accionClick={mostrar}>x</Boton>
            </div>
            <div className='filas'>
                <Boton accionClick={mostrar}>4</Boton>
                <Boton accionClick={mostrar}>5</Boton>
                <Boton accionClick={mostrar}>6</Boton>
                <Boton accionClick={mostrar}>-</Boton>
            </div>
            <div className='filas'>
                <Boton accionClick={mostrar}>1</Boton>
                <Boton accionClick={mostrar}>2</Boton>
                <Boton accionClick={mostrar}>3</Boton>
                <Boton accionClick={mostrar}>+</Boton>
            </div>
            <div className='filas'>
                <Boton accionClick={convertirTipoNumero}>
                    <img className="img-conversion-num" src={imgConversionNumero} alt="positivo-negativo" />
                </Boton>
                <Boton accionClick={mostrar}>0</Boton>
                <Boton accionClick={mostrar}>,</Boton>
                <Boton accionClick={calcularResultado}>=</Boton>
            </div>

            
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