export function cityCodeReducer (state = null, action) {
    switch (action.type) {
        case 'STORE_CITYCODE':
            return action.payload;
            break;
    }
    return state;
}

 