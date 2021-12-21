export default store => next => action => {
    console.log('logger', store);
    console.log('logger action', action);

    next(action);
}