import { User } from './user';

export enum VacationType {
    Recreation,
    University,
    Family,
    Sick
}

export enum VacationStatus {
    Pending,
    Approved,
    Rejected
}

// export interface Vacation {
//     userId: number;
//     type: VacationType;
//     startDate: Date;
//     endDate: Date;
//     comment: string;
//     status: VacationStatus;
// }

export class Vacation {
    constructor(
        public userId: User["id"],
        public type: VacationType,
        public startDate: Date,
        public endDate: Date,
        public comment: string,
        public status: VacationStatus) { }
}