/**
 * @TJS-type integer
 */
type Int32 = number;
type integer = Int32;

/**
 * 地块战斗状态
 */
export enum LandFightStatus {
    // 受到攻击
    attacked = 'attacked',

    // 正常状态
    normal = 'normal'
}

/**
 *  地格归属状态
 */
export enum LandStatus{
    // 没有变更(保持当前状态不变)
    nill = 'Nill',
    // 自由地格
    unoccupied = 'Unoccupied',
    // 被攻占地格
    occupied = 'Occupied',
    // 门票地格
    ticket = 'Ticket',
    // VIP地格(购买的地格)
    vip = 'VIP'
}

/**
 * 玩家地格信息数据结构
 */
export interface UserLandInfo {
    /**
     * landId = 地格坐标R*10000 + 地格坐标C
     *
     * @items.type integer
     * @items.minimum 0
     */
    vipLands: integer[];
   
    /**
     * landId = 地格坐标R*10000 + 地格坐标C
     *
     * @items.type integer
     * @items.minimum 0
     */
    ticketLands: integer[];
   
    /**
     * landId = 地格坐标R*10000 + 地格坐标C
     *
     * @items.type integer
     * @items.minimum 0
     */
    occupiedLands: integer[];
}

export interface GetInitLandAttributionsInput {

}

// 初始化land归属权时的结构
export interface GetInitLandAttributionsOutput {
    /**
     * 消息版本号
     */
    etag: integer,

    /**
     * 玩家地格信息 userId = UserLandInfo
     * @additionalProperties true
     */
    landInfos: {
        [userId: string]: UserLandInfo
    }
}

// 多个领地所有权变更
export interface MultiLandAttributionUpdate {
    /**
     * 消息版本号
     */
    etag: integer

    /**
     *  归属用户id
     */
    userId: string

    /**
     * landId = 地格坐标R*10000 + 地格坐标C
     *
     * @items.type integer
     * @items.minimum 0
     */
    vipLandIds: integer[]

    /**
     * landId = 地格坐标R*10000 + 地格坐标C
     *
     * @items.type integer
     * @items.minimum 0
     */
    ticketLandIds: integer[]

    /**
     * landId = 地格坐标R*10000 + 地格坐标C
     *
     * @items.type integer
     * @items.minimum 0
     */
    occupiedLandIds: integer[]
}

// land 战斗状态变更消息
export interface LandFightStatusUpdate {
    /**
     * 消息版本号
     */
    etag: integer,

    /**
     * landId = 地格坐标R*10000 + 地格坐标C
     */
    landId: integer,

    /**
     * 进攻地块的用户id
     */
    userId: string;

    /**
     * 状态 attacked || normal
     */
    fightStatus: LandFightStatus,
}

// land 归属权变更消息
export interface LandAttributionUpdate {
    /**
     * 消息版本号
     */
    etag: integer,

    /**
     * 归属用户id
     */
    userId: string;   

    /**
     * landId = 地格坐标R*10000 + 地格坐标C
     */
    landId: integer;

     /** 
     * 地格新的归属状态 
     * unoccupied || occupied || ticket || vip     
     */
    landStatus: LandStatus;
}