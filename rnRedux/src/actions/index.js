export const selectLibrary = (Id) => {
    return {
        type: 'select_library',
        payload: Id
    }
}
