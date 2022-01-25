/**
 * @TJS-type integer
 */
interface Int32 { };

/**
 * 品质
 */
export enum NFTRarity {
    common = 'common',
    rare = 'rare',
    epic = 'epic',
    mythic = 'mythic',
    unique = 'unique'    
}

export interface NftCanBuildInput{
    /**
     *  Nft Id
     */    
    nftId: string;

    /**
     *  归属用户id
     */
    userId: string;

    /**
     * 实体存活时间，对第三方NFT有效, 单位(秒)
     */
    aliveTimeSec: Int32;
}

export interface NftCanBuildOutput{
    /**
     * 消息版本号
     */
    etag: Int32;

    /**
     *  Nft Id
     */    
    nftId: string;

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
    rarity: NFTRarity;
   
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
 export interface ThirdNft{
    /**
     *  Nft Id = address + tokenId
     */    
    nftId: string;

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

    tokenUrl: string;

    tokenId: string;
}


/**
 * 第三方NFT过期信息结构
 */
export interface ThirdNftTimeOut{
    /**
     *  Nft Id
     */    
    nftId: string;

    /**
     * 名字（是否唯一） 
     * */
    timeOutSec: Int32;
}

/**
 *  装备类NFT
 */
export interface WearableNFT{
    /**
     *  Nft Id
     */    
    nftId: string;

    /**
     * Placeable Rarity   
     */
    rarity: NFTRarity;
       
    /**
     * object config Id
     */
    objectId: Int32;
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
    thirdInfo: ThirdNft[];

    /**
     * 第三方NFT 放置后的过期时间列表 
     */
    thirdTimeOut: ThirdNftTimeOut[];

    /**
     * 装备NFT LIST 
     */   
    wearables: WearableNFT[];
}


/** 
 *添加用户第三方NFT道具
 */
 export interface AddWearableNFT {
    /**
     * 消息版本号
     */
    etag: Int32;

    /**
     *  归属用户id
     */
    userId: string;

    /**
     * 装备信息
     */
    wearable: WearableNFT;
}


/**
 * 更新 第三方NFT   建造过期时间
 */
export interface UpdateThirdNftTimeOut{
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
     nftId: string;

     /**
      * 过期时间 单位 秒， 清空则给0 
      * */
     timeOutSec: Int32;
}

/** 
 *添加用户第三方NFT道具
 */
export interface AddThirdNft {
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
    thirdNft: ThirdNft;
}

/** 
 * 添加用户放置类道具
 */
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

/** 
 *删除用户NFT道具
 */
export interface DeleteNft {
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
    nftId: string;
}

/** 
 * 攻占地格 请求地格中产生效果的skill
 */
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

/** 
 * 攻占地格 请求地格skill返回
 */
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