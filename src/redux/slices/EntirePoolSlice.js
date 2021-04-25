import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios-instance'


const initialState = {
    fetchedData: undefined,
    answered: true,
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


// Slice
export const entirePoolSlice = createSlice({
  name: 'pool',
  initialState,
  reducers: {
    toggleAnswer: (state) => {
      state.answered = !state.answered 
    },
  },

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
export const { toggleAnswer } = entirePoolSlice.actions

export default entirePoolSlice.reducer
