/**
 * @TJS-type integer
 */
interface Int32 extends Number { };

export interface CanBuildNFTInput {
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


export interface CanBuildNFTOutput {
    /**
     * 消息版本号
     */
    etag: Int32;

    /**
     * NFT id
     */
    nftId: string;

    canBuild: boolean;
}

/**
 * NFTAttribute 为产品定义的每个NFT的属性.
 */
export interface NFTAttribute {
    display_type?: string;

    trait_type: string;

    value: string;
}

export interface NFTMetadata {
    /**
     * NFT name
     */
    name: string;

    /**
     * NFT description
     */
    description: string;


    /**
     * NFT image data.
     */
    image?: string;
    image_url?: string;
    image_data?: string;

    /**
     * NFT gif animation url
     */
    animation_url?: string;

    /**
     * Youtube video url
     */
    youtube_url?: string;

    /**
     * NFT 扩展url
     * 有扩展URL的NFT社区会实现规范用户点击进行跳转。
     */
    external_url?: string;

    background_color?: string;

    /**
     * NFT的额外属性.
     */
    attributes: NFTAttribute[];
}

export interface NFT {
    /**
     * 该NFT是否是Meland.ai官方NFT
     */
    isMelandAI: boolean;

    /**
     * NFT id
     */
    id: string;

    /**
     * NFT token id
     */
    tokenId: string;

    /**
     * NFT address
     */
    address: string;

    /**
     * NFT metadata info
     * 目前的实现是, 如果是第三方NFT, 则metadata为空, 直接将tokenURL返回给前端解析即可.
     * example: https://nftmetadata-service-release.melandworld.com/placeable/80000031/1
     */
    metadata: NFTMetadata;

    /**
     * NFT metadata url
     * https://nftmetadata-service-release.melandworld.com/placeable/80000031/1
     */
    tokenURL: string;
}

export interface GetUserNFTsInput {
    userId: string;
}

/**
 * NFT放置过期时间结构体
 */
export interface NFTPlaceableTimeout {
    /**
     *  NFT Id
     */
    nftId: string;

    /**
     * 名字（是否唯一） 
     * */
    timeoutSec: Int32;
}

export interface GetUserNFTsOutput {
    /**
     * 消息版本号
     */
    etag: Int32;

    /**
     * user all nfts
     */
    nfts: NFT[];

    /**
     * NFT放置过期时间表
     */
    placeableTimeouts: NFTPlaceableTimeout[];
}


/** 
 * 添加一个NFT
 */
export interface AddUserNFT {
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
    nft: NFT;
}

/** 
 * 删除NFT
 */
export interface DeleteUserNFT {
    /**
     * 消息版本号
     */
    etag: Int32;

    /**
     *  归属用户id
     */
    userId: string;

    /**
     * NFT id
     */
    nftId: string;
}

export interface MintNFTWithMetadataInput {
    // mint to user id
    toUserId: string;

    // game user itemId, aka cid
    itemId: string;

    // Mint NFT metadata
    metadata: NFTMetadata;

    // count
    mintCount: Int32;

    // 是否异步
    // 如果为true, 则不会立即返回mint结果, 而是通过事件通知
    async: boolean;
}

export interface MintNFTWithMetadataOutput {
    /**
     * 消息版本号
     */
    etag: Int32;

    // 事务id
    // 通过这个id可以查询事务状态
    txId: string;
}


export interface MintNFTWithItemIdInput {
    // mint to user id
    toUserId: string;

    // game user itemId, aka cid
    itemId: string;

    // count
    mintCount: Int32;

    // 是否异步
    // 如果为true, 则不会立即返回mint结果, 而是通过事件通知
    async: boolean;
}

export interface MintNFTWithItemIdOutput {
    /**
     * 消息版本号
     */
    etag: Int32;

    // 事务id
    // 通过这个id可以查询事务状态
    txId: string;
}