//Aqui teremos a lógica do Redux
//aqui declaramos os reducers da aplicação

import { createSlice } from "@reduxjs/toolkit";

//declaração dos reducers
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },

    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

//exportar as funções que serão executadas por meio deuma ação (action)

export const { increment, decrement, incrementByAmount} = counterSlice.actions

//definição do dispatcher somente após o tempo definido pelo setTimeout
export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    }, 1000)
}


export const selectCount = (state) => state.counter.value

export default counterSlice.reducer

