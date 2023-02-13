import { configureStore, createSlice } from '@reduxjs/toolkit'


let user = createSlice({
    name: 'card',
    initialState: [{
        id: 0, // id는 모두 고유값이어야 합니다.
        title: "리액트 강의보기",
        body: "챕터 1부터 챕터 12까지 학습",
        isDone: false
    },
    {
        id: 1, // id는 모두 고유값이어야 합니다.
        title: "신나게놀기",
        body: "1월 1일부터 12월 31일까지 플레이",
        isDone: false
    },],


    reducers: {
        changeIsDone(state, action) {

            state[action.payload].isDone = !state[action.payload].isDone

        }
    }
})
export let { changeIsDone } = user.actions


export default configureStore({
    reducer: {
        user: user.reducer,

    }
}) 