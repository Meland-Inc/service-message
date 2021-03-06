/**
 * @TJS-type integer
 */
 type Int32 = number;
 type integer = Int32;

/**
 * 玩家死亡事件, 当玩家死亡时触发
 */
export interface PlayerDeath {
    /**
     * 最后造成死亡的数值
     */
    lastDamage: number;

    /**
     * 造成玩家死亡的生物或用户id
     */
    killerId: string;

    /**
     * 造成玩家死亡的生物或用户名称
     */
    killerName: string;

    /**
     * 玩家死亡的附近landId
     */
    deathLandId: integer;

    /**
     * 死亡的用户id
     */
    userId: string;
}

export enum PlayerRebornType {
    main_city = 'main_city',
    in_place = 'in_place'
}

/**
 * 玩家重生事件, 当玩家重生时, 会触发此事件
 */
export interface PlayerReborn {
    /**
     * 玩家重生类型
     */
    type: PlayerRebornType;

    /**
     * 重生的地格id
     */
    rebornLandId: integer;

    /**
     * 重生的玩家id
     */
    userId: string;
}

/**
 * 玩家击杀怪物
 */
export interface PlayerKilled {
    /**
     * 击杀的目标id
     */
    targetId: string;

    /**
     * 击杀的目标名称
     */
    targetName: string;

    /**
     * 最后一击的伤害
     */
    lastDamage: number;

    /**
     * 怪物被击杀的坐标
     */
    killedLandId: integer;

    /**
     * 用户id
     */
    userId: string;
}


export interface PlayerInfo{
    userId: string;
    
    playerName: string;

    playerId: string;

    icon: string;

    feature: string;

    /**
     * 角色cid (男性 1001 / 女性 1002)
    */
    roleCId: integer;

    level: integer;

    curExp: integer;
    
    curHp: integer;
}

export interface GetPlayerInfoByUserIdInput {
    userId: string;
}
export interface GetPlayerInfoByUserIdOutput {
    playerData: PlayerInfo;
}

export interface MultiGetPlayerInfoByUserIdInput {
    userIds: string[];
}
export interface MultiGetPlayerInfoByUserIdOutput {
    playerInfos : PlayerInfo[];
}




export interface PlayerItemSlot{
    // item socket postion
    position: integer;

    // item socket level
    level: integer; 
}
export interface GetPlayerItemSlotsInput {
    userId: string;

    playerId: string;
}
export interface GetPlayerItemSlotsOutput {
    userId: string;

    playerId: string;

    itemSlots: PlayerItemSlot[];
}
export interface UpgradePlayerItemSlotsInput {
    userId: string;

    playerId: string;

    itemSlots: PlayerItemSlot[];
}
export interface UpgradePlayerItemSlotsOutput {
    userId: string;

    playerId: string;

     /**
     * 是否成功
     */
    success: boolean;
}

export interface DeductUserExpInput{
    userId: string;

    deductExp: integer;    
}
export interface DeductUserExpOutput{
     /**
     * 是否扣除成功
     */
    deductSuccess: boolean;

    /**
    * 如果扣除失败, 则返回失败原因, 否则返回空字符串
    */
    failedReason: string;
}