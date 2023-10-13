import * as types from "../app/actionType";

const init = {
  Data: [],
};


export const reducer = (state = init, action) => {
  const { payload, type } = action;
  switch (type) {
    case types.DATA_REQUEST: {
      return { ...state, Data: [] };
    }
    case types.DATA_SUCCESS: {
      // console.log(payload)
      return { ...state, Data:payload };
      // return { ...state, todoData:[...state.todoData, payload] };
    }

    case types.DATA_FAILURE: {
      return { ...state, todoData: [] };
    }





    default:
      return state;
  }
};
