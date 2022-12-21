export default class ValidationError implements Error {
    constructor(public name: string, public message: string, public stack: string = null) { }
}