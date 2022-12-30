import ValidationError from '@shared/errors/validation.error'

export class RocketDomain {
    constructor(public id: number, public name: string) {}

    validate(): void | ValidationError {
        if (!this.name)
            throw new ValidationError('Validation Error', 'Rocket must have a name')
    }
}
