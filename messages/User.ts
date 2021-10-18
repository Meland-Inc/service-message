export declare enum UserType {
    STUDENT = "STUDENT",
    TEACHER = "TEACHER",
    MANAGER = "MANAGER"
}

export declare enum Sex {
    MALE = "MALE",
    FEMALE = "FEMALE"
}

export interface User {
    id: string;
    schoolId: string;
    username: string;
    nickname: string;
    realname: string;
    usertype: UserType;
    sex: Sex;
    email: string;
    mobile: string;
    avatar: string;
}

export interface Auth {
    accessToken: string;
    userType?: UserType;
}

export interface TemporaryTokenExtraInfo {
    userId: string;
}
export interface TemporaryToken {
    id: string;
    token: string;
    usedAt?: Date;
    expiredAt: Date;
    createdAt: Date;
    updatedAt: Date;
    temporaryTokenExtraInfo?: TemporaryTokenExtraInfo;
}