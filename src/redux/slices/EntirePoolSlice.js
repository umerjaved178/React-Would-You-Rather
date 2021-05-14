import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios-instance";

const initialState = {
  fetchedData: undefined,
  answered: true,
  moveToHome: false,
};

// Thunk
export const firebaseDataFetch = createAsyncThunk(
  "pools/firebaseDataFetch",
  async (type, thunk) => {
    const response = await axios.get("/questions.json");
    return response.data;
  }
);
export const voteHandler = createAsyncThunk(
  "pools/voteHandler",

  async ({ id, selectedOption, voter, history }, thunk) => {
    let url = `/questions/${id}/${selectedOption}/votes.json`;
    await axios.get(url).then((res) => {
      axios.put(url, res.data.concat(voter));
    });
    thunk.dispatch(firebaseDataFetch());
    thunk.dispatch(entirePoolSlice.actions.votingFinish());
  }
);

// Slice
export const entirePoolSlice = createSlice({
  name: "pool",
  initialState,
  reducers: {
    toggleAnswer: (state) => {
      state.answered = !state.answered;
    },
    votingFinish: (state) => {
      state.moveToHome = true;
    },
  },

  extraReducers: {
    [firebaseDataFetch.rejected]: (state, action) => {
      console.log("REJECTEDDD");
    },
    [firebaseDataFetch.fulfilled]: (state, action) => {
      const fetchedQuestions = [];
      for (let key in action.payload) {
        fetchedQuestions.push({
          id: key,
          ...action.payload[key],
        });
      }
      state.fetchedData = fetchedQuestions;
      state.moveToHome = false;
      console.log("new main call", action);
    },

    [voteHandler.pending]: (state, action) => {
      console.log("voted pending");
    },
    [voteHandler.fulfilled]: (state, action) => {
      console.log("voted fulfilled");
    },
    [voteHandler.rejected]: (state, action) => {
      console.log("voted rejected");
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleAnswer, newAPICallToggle } = entirePoolSlice.actions;

export default entirePoolSlice.reducer;
