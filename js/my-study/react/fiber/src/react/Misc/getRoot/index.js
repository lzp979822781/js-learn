const getRoot = instance => {
    let fiber = instance.__fiber;
    console.log()
    while(fiber.parent) {
        fiber = fiber.parent;
    }

    return fiber;
}

export default getRoot;