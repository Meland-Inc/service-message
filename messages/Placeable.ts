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

export interface PlaceableCanBuildInput{
    /**
     *  Nft Id
     */    
    placeableId: string;

    /**
     *  归属用户id
     */
    userId: string;
}
export interface PlaceableCanBuildOutput{
    /**
     * 消息版本号
     */
    etag: Int32;

    /**
     *  Nft Id
     */    
    placeableId: string;

    canBuild: boolean;
}

export interface PlaceableSkill{  
    /**
     *  skill Id,  only key
     */     
    skillId: Int32;

    /**
     *  skill level 
     */   
    level: Int32;  
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
    objectId: Int32;    

    /**
     * can build land
     */
    placeableLand: string[];

    /**
     * skill list
     */
    skillList: PlaceableSkill[];
}

/** 
 * 玩家所有的道具信息 返回消息结构
 */
export interface UserPlaceablesOutput {
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
/** 
 * 玩家所有的道具信息 请求消息结构
 */
export interface UserPlaceablesInput {
    /**
     *  归属用户id
     */
    userId: string;
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
