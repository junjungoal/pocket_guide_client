import {
  NEXT_STEP,
  PREV_STEP,
  RESET_STEP
} from '../constants/ActionTypes'

const initialState = {
  step: 0
}

export default function step(state=initialState, action) {
  let step = state.step
  switch(action.type) {
  case NEXT_STEP:
    return {step: step + 1}
  case PREV_STEP:
    return {step: step - 1}
  case RESET_STEP:
    return {step: 0}
  default:
    return state
  }
}