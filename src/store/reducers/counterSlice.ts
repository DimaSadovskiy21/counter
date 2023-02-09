import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';



type CounterStateType = {
  counter: number | string;
  maxValue: number;
  startValue: number;
};

let counterStorage = localStorage.getItem('counter');
let counterValue = counterStorage ? JSON.parse(counterStorage) : 0
let maxStorage = localStorage.getItem('maxValue')
let max = maxStorage ? maxStorage : 0
let startStorage = localStorage.getItem('startValue')
let start = startStorage ? startStorage : 0
// counterValue && dispatch(setCounter(JSON.parse(counterValue)));

const initialState: CounterStateType = {
  counter: counterValue,
  maxValue: +max,
  startValue: +start,
};

type MinMaxType = {
    startValue: number;
    maxValue: number
}

export const setSettings = createAsyncThunk<void, MinMaxType>(
    'counter/setSettings',
    ({startValue, maxValue}, {dispatch}) => {
    dispatch(setCounter(startValue));
    localStorage.setItem('maxValue', JSON.stringify(maxValue));
    localStorage.setItem('startValue', JSON.stringify(startValue));
    }
)

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCounter: (state, action: PayloadAction<number | string>) => {
      return {
        ...state,
        counter: action.payload,
      };
    },
    incrementCounter: (state) => {
      return {
        ...state,
        counter: +state.counter + 1,
      };
    },
    setMaxValue: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        maxValue: action.payload
      }
    },
    setStartValue: (state, action: PayloadAction<number>) => {
        return {
          ...state,
          startValue: action.payload
        }
      },
      setSettings: (state, action: PayloadAction<number>) =>  {
        return {
          ...state,
          startValue: action.payload
        }
      },
  },
});

export const { setCounter, incrementCounter, setMaxValue, setStartValue } = counterSlice.actions;

export default counterSlice.reducer;
