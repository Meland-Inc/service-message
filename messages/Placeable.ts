/**
 * @TJS-type integer
 */
interface Int32 { };

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
 * 第三方NFT信息结构
 */
 export interface ThirdPlaceable{
    /**
     *  Nft Id
     */    
    placeableId: string;

    /**
     * 名字（是否唯一） 
     * */
    name: string;

    /**
     * 展示图片
    */
    resUrl: string;

    /**
     * 描述信息，
    */
    desc: string;
}


/**
 * 第三方NFT信息结构
 */
 export interface ThirdPlaceableBuildTimeOut{
    /**
     *  Nft Id
     */    
    placeableId: string;

    /**
     * 名字（是否唯一） 
     * */
    timeOutSec: Int32;
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
     * 玩家放置道具信息 Placeable[]
     */
    placeables: Placeable[];

    /**
     * 第三方NFT LIST 
     */
    thirdInfo: ThirdPlaceable[];

    /**
     * 第三方NFT 放置后的过期时间列表 
     */
    thirdTimeOut: ThirdPlaceableBuildTimeOut[];
}

/**
 * 更新 第三方NFT   建造过期时间
 */
export interface UpdateThirdPlaceableBuildTimeOut{
    /**
     *  Nft Id
     */    
     placeableId: string;

     /**
      * 过期时间 单位 秒， 清空则给0 
      * */
     timeOutSec: Int32;
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

// 攻占地格 请求地格中产生效果的skill
export interface LandUsingSkillInput{
    /**
     * 消息版本号
     */
    etag: Int32;

    /**
     *  地格ID
     */
    tileId: Int32;

    /**
     *  攻占者ID
     */
    userId: string
}

// 攻占地格 请求地格skill返回
export interface LandUsingSkillOutput{
    /**
     * 消息版本号
     */
    etag: Int32;

    /**
     *  地格ID
     */
    tileId: Int32;

    /**
     *  攻占者ID
     */
    userId: string

    /**
     * skill list
     */
    skillList: PlaceableSkill[];
}