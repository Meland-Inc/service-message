import { PlayerInfo } from "./Player";

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
    id: string;
    type: PVPUserType;
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
    // 是否正确
    isCorrect: boolean;
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


export interface PlayerAvatar{
    nftId: string;
    cid: number;
    pos: number;
}

export interface PvpPlayerProfile{
    playerString: string;
    score: number;
    baseInfo: PlayerInfo;
    avatar: PlayerAvatar[];
}

export interface GetPlayerPvpProfileInput {
    playerId: string;
}

export interface GetPlayerPvpProfileOutput {
    profile: PvpPlayerProfile;
}
