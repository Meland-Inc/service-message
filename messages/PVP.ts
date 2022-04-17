export enum PVPPKSessionStatus {
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

export interface PVPPlayer {
    Id: string;
    Type: PVPUserType;
}

export interface PkSessionUITickInput {
    pkSessionId: string;
    player: PVPPlayer;
    data: string;
}

export interface PkSessionUITickOutput {

}

export interface PkSessionDoQuestionInput {
    pkSessionId: string;

    player: PVPPlayer;
  
    questionId: string;

    answerSequentialMatch?: string[];
}

export interface PkSessionDoQuestionOutput {

}

export interface PkSessionLoadSuccessInput {
    pkSessionId: string;

    player: PVPPlayer;
}

export interface PkSessionLoadSuccessOutput {

}

export interface GetCurrentPkSessionIdInput {
    player: PVPPlayer;
}

export interface GetCurrentPkSessionIdOutput {
    pkSessionId: string;
}