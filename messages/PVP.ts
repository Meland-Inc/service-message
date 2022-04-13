export enum PVPPKRoomStatus {
    // 玩家资源加载中
    preloading = 'preloading',

    // 已开始对决
    started = 'started',

    // 对决结束
    ended = 'ended',
}

export enum PVPUserType {
    // guest
    guest = 'guest',

    // 注册玩家
    user = 'user',
}

export interface PVPUser {
    /**
     * If guest, then user id is the fingerprint id of the user's device.
     * Used purely to distinguish between different users
     */
    type: PVPUserType;

    /**
     * user id
     */
    id: string;

    /**
     * 血量
     */
    blood: number;
}

// PVP房间
// 一切PVP的基础
// 对外会提供多个API来创建不同的房间
export interface PVPPKRoom {
    // 房间id
    id: string;

    // questions string for player1
    questions1str: string;

    // questions string for player2
    questions2str: string;

    // 房间状态
    status: PVPPKRoomStatus;

    player1: PVPUser;
    player2: PVPUser;

    /**
     * 超时倒计时.
     */
    timeoutSeconds: number;
}