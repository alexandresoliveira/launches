export class LaunchesDTO {
    constructor(public id: number,
        public rocket: string,
        public date: Date,
        public success: boolean) { }
}
