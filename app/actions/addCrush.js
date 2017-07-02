export const addCrush = (crush) => {
    return {
        type: 'CRUSH_ADDED',
        payload: crush
    }
};
export const addCrushSuccess = (crush) => {
    return {
        type: 'CRUSH_ADDED_SUCCESS',
        payload: crush
    }
};
