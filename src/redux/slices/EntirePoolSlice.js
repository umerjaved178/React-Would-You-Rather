import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios-instance'


const initialState = {
    fetchedData: undefined
}

// Thunk
export const firebaseDataFetch = createAsyncThunk(
    'pools/firebaseDataFetch',
    async type => {
        const response = await axios.get('/questions.json')
        return response.data
    }
  )

export const voteHandler = createAsyncThunk(
    'pools/voteHandler',
    
    async ({id, selectedOption, voter}) => {
        let url = `/questions/${id}/${selectedOption}/votes.json`
        await axios.get(url).then(res=> 
            axios.put(url, res.data.concat(voter))
          )
        }
    )



export const entirePoolSlice = createSlice({
  name: 'pool',
  initialState,
//   reducers: {
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
//   },

  extraReducers: {
    [firebaseDataFetch.rejected]: (state, action) => {
        console.log("REJECTEDDD")
      },
    [firebaseDataFetch.fulfilled]: (state, action) => {
        const fetchedQuestions = []
        for(let key in action.payload){
          fetchedQuestions.push({
            id: key,
            ...action.payload[key],
          })
        } 
      state.fetchedData = fetchedQuestions
    },

    [voteHandler.fulfilled]: (state, action) => {
        // console.log("REJECTEDDD")
      },
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = entirePoolSlice.actions

export default entirePoolSlice.reducer
