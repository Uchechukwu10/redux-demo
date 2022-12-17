import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyBiscuit, addBiscuit } from '../redux'

function HooksBiscuitContainer() {
    const numOfBiscuits = useSelector(state => state.biscuit.numOfBiscuits)
    const dispatch = useDispatch()

    return (
    <div>
        <h2>Number of biscuits - {numOfBiscuits}</h2>
        <button onClick={() => dispatch(buyBiscuit())}>Buy Biscuit</button>
        <button onClick={() => dispatch(addBiscuit())}>Add Biscuit</button>
    </div>
    )
}

export default HooksBiscuitContainer