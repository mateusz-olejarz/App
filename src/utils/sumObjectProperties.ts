export const sumObjectProperties = (object: any, property: string): number => {
    return object.reduce((x: any, y: any) => ({
        [property]: x[property] + y[property]
    }), { [property]: 0 })[property]
}