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