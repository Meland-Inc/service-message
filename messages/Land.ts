/**
 * @TJS-type integer
 */
export interface Int32 { };

/**
 * 地块状态
 */
export enum LandStatus {
    // 受到攻击
    attacked = 'attacked',

    // 正常状态
    normal = 'normal'
}

// 初始化land归属权时的结构
export interface InitLandAttribution {
    /**
     * 消息版本号
     */
    etag: Int32,

    /**
     * 攻占的地块
     * @additionalProperties true
     */
    attackLands: {
        [userId: string]: Int32[]
    }

    /**
     * 购买的地块
     * @additionalProperties true
     */
    buyLands: {
        [userId: string]: Int32[]
    }
}

// 多个领地所有权变更
export interface MultiLandAttributionUpdate {
    /**
     * 消息版本号
     */
    etag: Int32

    // 归属用户id
    userId: string

    /**
     * 地块rc
     * R * 10000 + C
     */
    tileId: Int32[]
}

// land 状态变更消息
export interface LandStatusUpdate {

    /**
     * 消息版本号
     */
    etag: Int32,

    /**
     * 地块rc
     */
    tileId: Int32,

    /**
     * 进攻地块的用户id
     */
    userId: string;

    /**
     * 状态
     */
    status: LandStatus,
}

// land 归属权变更消息
export interface LandAttributionUpdate {
    /**
     * 消息版本号
     */
    etag: Int32

    // 归属用户id
    userId: string

    /**
     * 消息版本号
     * 地块rc
     * R * 10000 + C
     */
    tileId: Int32
}