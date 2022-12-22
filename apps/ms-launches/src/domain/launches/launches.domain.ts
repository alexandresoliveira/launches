import ValidationError from '@shared/errors/validation.error'

export class LaunchesDomain {
    constructor(public id: number,
        public rocket: string,
        public date: Date,
        public success: boolean) { }

    validateLaunch() {
        if (!this.rocket && !this.date) throw new ValidationError('Validation Error', 'Launch must have a date and a rocket')
    }
}
