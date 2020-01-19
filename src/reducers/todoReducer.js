export const initialState = [
  {task: '',
  completed: false,
  id: 3892987589}
]

export const reducer = (state, action) => {
    switch(action.type) {
      case "ADD_TODO":
        return [
          ...state, action.payload
        ]
        case "COMPLETED_TODO":
          return state.map(task => {
              if (task.id === action.payload) {
                return {
                  ...task,
                  completed: !task.completed
                };
              } else {
                return task;
              }
            })
        case "CLEAR_COMPLETED_TODO":
            return state.filter(task => !task.completed)

        default:
          return state;
    }

}