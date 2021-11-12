/**
 * @TJS-type integer
 */
export interface Int32 { };

/**
 * 品质
 */
export enum PlaceableRarity {
    common = 'common',
    rare = 'rare',
    epic = 'epic',
    mythic = 'mythic',
    unique = 'unique'    
}

/**
 * 道具信息数据结构
 */
export interface Placeable {
     /**
      *  Nft Id
      */    
    placeableId: string;
   
    /**
     * Placeable Rarity   
     */
    rarity: PlaceableRarity;
   
    /**
     * object config Id
     */
    objectId: number;
}

/** 
 * 玩家所有的道具信息
 */
export interface UserPlaceables {
    /**
     * 消息版本号
     */
    etag: Int32;

    /**
     *  归属用户id
     */
    userId: string;

    /**
     * 玩家道具信息 Placeable[]
     */
    placeables: Placeable[];
}

// 添加用户道具
export interface AddPlaceable {
    /**
     * 消息版本号
     */
    etag: Int32;

    /**
     *  归属用户id
     */
    userId: string;

    /**
     * 道具信息
     */
    placeables: Placeable;
}

// 删除用户道具
export interface DeletePlaceable {
    /**
     * 消息版本号
     */
    etag: Int32;

    /**
     *  归属用户id
     */
    userId: string;

    /**
     *  Nft Id
     */    
    placeableId: string;
}
