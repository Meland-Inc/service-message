export interface Class {
    id: string;
    schoolId: string;
    name: string;
    creatorId: string;
    studentCount: number;
    createdAt: Date;
    updateAt: Date;
    status: number;
} 

export interface School {
    id: string;
    name: string;
    provinceCode: string;
    cityCode: string;
    areaCode: string;
    addressLocation: string;
    brandId: string;
    coursePackages?: string[];
}

export interface ClassCourse {
    id: string;
    startedCover: string;
    noStartedCover: string;
    completedCover: string;
    name: string;
    mapId: string;
    mapType: string;
    creatorId: string;
    description: string;
    teacherSuggest: string;
    remark: string;
    createdAt?: Date;
    updatedAt?: Date;
    index: number;
}

export interface StudentJoinClass {
    classId: string;
}