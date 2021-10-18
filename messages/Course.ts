export interface CourseBrief {
    id: string;
    name?: string;
    index?: number;
}

export interface CoursePackage {
    id: string;
    name: string;
    cover: string;
    introduce: string;
    level: string;
    tags: string;
    createdAt: Date;
    updatedAt: Date;
    remark: string;
    locked: 1 | 0;
    courses?: CourseBrief[];
    coursePackageTypeId: string;
}

export interface Certificate {
    id: string;
    name: string;
    description?: string;
    status?: number;
    createdAt: Date;
    updatedAt: Date;
    coursePackageTypes?: string[];
}

export interface TeacherCertificate {
    id: string;
    userId: string;
    certificateId: string;
    createdAt: Date;
}