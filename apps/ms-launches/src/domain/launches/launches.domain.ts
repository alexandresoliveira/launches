import { RocketDomain } from '@domain/rockets/rockets.domain'
import ValidationError from '@shared/errors/validation.error'

export class LaunchesDomain {
    constructor(
    public id: number,
    public rocket: RocketDomain,
    public rocketId: number,
    public date: Date,
    public success: boolean,
    public launchCode: string,
    ) {}

    validate() {
        if (!this.rocket || !this.date || !this.launchCode)
            throw new ValidationError(
                'Validation Error',
                'Launch must have a date, a launch code and a rocket'
            )
    }
}
