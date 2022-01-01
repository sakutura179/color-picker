import { CHANGE_COLOR, CHANGE_SIZE } from "./constants";

const initialState = {
    colorState: {
        colors: ['red', 'green', 'blue', 'yellow', 'black', 'white', 'grey', 'orange'],
        active: 'red'
    },
    sizeState: {
        sizes: ['12px', '16px', '18px', '20px', '24px', '30px', '32px', '36px', '40px'],
        active: '12px'
    }
}

function reducer(state, action) {
    switch (action.type) {
        case CHANGE_COLOR:
            return {
                ...state,
                colorState: {
                    ...state.colorState,
                    active: action.color
                }
            };
        case CHANGE_SIZE:
            let newActive
            const { sizes, active } = state.sizeState;
            switch (action.change) {
                case '+':
                    newActive = sizes[sizes.indexOf(active) + 1]
                    break;
                case '-':
                    newActive = sizes[sizes.indexOf(active) - 1]
                    break;
                case 'RESET':
                    newActive = sizes[0]
                    break;
                default:
                    break;
            }

            if (newActive === undefined) newActive = active

            return {
                ...state,
                sizeState: {
                    ...state.sizeState,
                    active: newActive
                }
            };
        default:
            throw new Error('Invalid action type');
    }
}

export { initialState };
export default reducer;