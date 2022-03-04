/**
 * @TJS-type integer
 */
type Int32 = number;

export interface CanBuildNFTInput {
    /**
     *  NFT Id
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

/**
 * 有一些配置表格的数据不希望显示在opensea中, 但是为了方便统一解析。
 * 生成到这个表格中.
 */
export interface MelandAttribute {
    trait_type: string;

    value: string;
}

/**
 * NFT metadata源信息
 * https://docs.opensea.io/docs/metadata-standards
 */
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

    /**
     * NFT的原始数据. 只有meland.ai的NFT才会携带
     * 基于策划的表格配置生成.
     */
    melandAttributes?: MelandAttribute[];
}

export interface NFT {
    /**
     * 该NFT是否是Meland.ai官方NFT
     */
    isMelandAI: boolean;

    /**
     * 只有当isMelandAI为true时, 才存在, 否则为空字符串
     */
    itemId: string;

    /**
     * 描述当前nft存储于那条链上
     */
    network: string;

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
     * NFT amount
     */
    amount: Int32;

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

export interface GetUserNFTsInput {
    userId: string;
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
 * 更新用户的NFT
 * 可能是添加或者数量变更.
 */
export interface UpdateUserNFT {
    /**
     * 消息版本号
     */
    etag: Int32;

    /**
     *  归属用户id
     */
    userId: string;

    /**
     * NFT信息
     */
    nft: NFT;
}

export interface MultiUpdateUserNFT {
    /**
     * 消息版本号
     */
    etag: Int32;

    /**
     *  归属用户id
     */
    userId: string;

    /**
     * NFT信息
     */
    nfts: NFT[];
}

export interface MintNFTWithMetadataInput {
    // mint to user id
    userId: string;

    // game user itemId, aka cid
    itemId: string;

    // Mint NFT metadata
    metadata: NFTMetadata;

    // count
    amount: Int32;

    // 是否异步
    // 如果为true, 则不会立即返回mint结果, 而是通过事件通知
    async: boolean;
}

export interface MintNFTWithMetadataOutput {
    // 事务id
    // 通过这个id可以查询事务状态
    txId: string;
}


export interface MintNFTWithItemIdInput {
    // mint to user id
    userId: string;

    // game user itemId, aka cid
    itemId: string;

    // qualityVal
    // int类型的品质
    qualityVal: string;

    // count
    amount: Int32;

    // 是否异步
    // 如果为true, 则不会立即mint, 而是将mint请求放入队列, 等待后台处理
    async: boolean;
}

export interface MintNFTWithItemIdOutput {
    // 事务id
    // 通过这个id可以查询事务状态
    txId: string;
}

export interface BatchMintNFTWithItemId {
    // mint to user id
    userId: string

    /**
     * 需要mint的所有的itemId
     */
    itemIds: string[];

    /**
     * index和itemIds一一对应
     * 所有数量
     */
    amounts: Int32[];

    /**
     * 所有的品质
     * index和itemIds一一对应
     */
    qualityVals: string[];

    // 是否异步
    // 如果为true, 则不会立即mint, 而是将mint请求放入队列, 等待后台处理
    async: boolean;
}

export interface BatchMintNFTWithItemIdOutput {
    // 事务id
    // 通过这个id可以查询事务状态
    txId: string;
}

export interface UseConsumableInput {
    /**
     * 使用消耗品的用户
     */
    userId: string

    /**
     * 消耗品的id
     */
    nftId: string;
}

export interface UseConsumableOutput {
    // 是否使用成功
    success: boolean;
}

export interface BurnNFTInput {
    /**
     * 用户id
     */
    userId: string

    /**
     * 丢弃的NFTId
     */
    nftId: string

    /**
     * 丢弃的数量
     */
    amount: Int32
}

export interface BurnNFTOutput {
    /**
     * 是否丢弃成功
     */
    success: boolean;
}

export interface GetUserNFTsByUserIdAndAddressInput {
    /**
     * 用户id
     */
    userId: string;

    /**
     * 用户钱包地址
     */
    blockchainAddress: string;
}

export interface GetUserNFTsByUserIdAndAddressOutput {
    nfts: NFT[];
}