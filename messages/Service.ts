export enum AppId {
    "meland-service" = 'meland-service',
    "bellplanet-game" = 'bellplanet-game',
    "web3-service" = 'web3-service',
    "bellplanet-account" = 'bellplanet-account',
    "pvp-service" = 'pvp-service',
}

/// action 分为输入和输出
/// 结构体分别用 Input 和 Output 结尾表示
/// 比如CanBuildNFT的结构体 CanBuildNFTInput, CanBuildNFTOutput

export enum MelandServiceAction {
    CanBuildNFT = 'CanBuildNFT',
    GetUserNFTs = 'GetUserNFTs',
    GetInitLandAttributions = 'GetInitLandAttributions',
    GetUserWeb3Profile = 'GetUserWeb3Profile',
    GetUserIdByAddress = 'GetUserIdByAddress',

    // 获取对用户特殊资产的跟踪
    GetUserTrack = 'GetUserTrack',

    // 燃烧用户的ditamin
    BurnDitamin = 'BurnDitamin',

    // 获取指定类型的题目
    GetQuestionsByTypesRandom = 'GetQuestionsByTypesRandom',

    // 检查题目是否回答正确
    CheckQuestionAnswer = 'CheckQuestionAnswer',

    GetQuestionResourcesByTypes = 'GetQuestionResourcesByTypes',

    // 执行区块链元交易
    SendMetaTx = 'SendMetaTx',

    SendTx = 'SendTx',
}

export enum PVPServiceAction {
    CreatePVPRoom = 'CreatePVPRoom',
    PVPRoomReady = 'PVPRoomReady',
    PVPRoomPreLeave = 'PVPRoomPreLeave',
    PkSessionUITick = 'PkSessionUITick',
    PkSessionDoQuestion = 'PkSessionDoQuestion',
    PkSessionLoadSuccess = 'PkSessionLoadSuccess',
    PkSessionAgain = 'PkSessionAgain',
    GetCurrentPkSessionId = 'GetCurrentPkSessionId',
    PVPMatchEnter = 'PVPMatchEnter', 
    PVPMatchLeave = 'PVPMatchLeave', 
    GetPlayerPvpProfile = 'GetPlayerPvpProfile',
    GetPlayerPvpRank = 'GetPlayerPvpRank',
    GetPvpHistory = 'GetPvpHistory',
    PvpSurrender = 'PvpSurrender',
}

export enum GameServiceAction {
    LandUsingSkill = 'LandUsingSkill',
    DeductUserExp = 'DeductUserExp',

}

export enum GameAccountServiceAction {
    GetPlayerInfoByUserId = 'GetPlayerInfoByUserId',
    MultiGetPlayerInfoByUserId = 'MultiGetPlayerInfoByUserId',
    GetPlayerUsingNftsByUserId = 'GetPlayerUsingNftsByUserId',    
    MultiGetPlayerUsingNftsByUserId = 'MultiGetPlayerUsingNftsByUserId',
    GetPlayerItemSlots = 'GetPlayerItemSlots',
    UpgradePlayerItemSlots = 'UpgradePlayerItemSlots'
}

export enum Web3ServiceAction {
    // 针对个性化的NFT
    // 使用MintNFTWithMetadata可以创建特殊的NFT
    MintNFTWithMetadata = 'MintNFTWithMetadata',

    // 针对一些固定属性的NFT
    // 比如材料, 特定的消耗品.
    // 这类的NFT属性是由产品配置表格决定的.
    // 同一个itemId的NFT属性一样.
    MintNFTWithItemId = 'MintNFTWithItemId',

    // 跟上面的功能一样
    // 只是用户标识变成user address 而不是 user id
    // 用于只知道用户地址的情况
    MintNFTWithItemIdAndUserAddress = 'MintNFTWithItemIdAndUserAddress',

    // 批量mint nft
    // 以节省网络开销
    BatchMintNFTWithItemId = 'BatchMintNFTWithItemId',

    // 基于图鉴合并NFT
    MergeByRecipe = 'MergeByRecipe',

    // 获取用户已经解锁的图鉴
    GetUserRecipes = 'GetUserRecipes',

    // 根据用户的id跟钱包地址获取用户所有的NFTs
    GetUserNFTsByUserIdAndAddress = 'GetUserNFTsByUserIdAndAddress',

    // 使用消耗品
    UseConsumable = 'UseConsumable',

    // 丢弃NFT
    BurnNFT = 'BurnNFT',

    UseMELD = "UseMELD",
}

/**
 * 所有订阅事件.
 * 返回发送和接收的结构体同名
 */
export enum SubscriptionEvent {
    // 领地攻占状态变更
    LandFightStatusUpdate = 'LandFightStatusUpdate',

    // 领地归属变更
    LandAttributionUpdate = 'LandAttributionUpdate',

    // 多个领地归属变更
    MultiLandAttributionUpdate = 'MultiLandAttributionUpdate',

    // 用户NFT变更
    // 删除
    // 增加都是这个协议
    UpdateUserNFT = 'UpdateUserNFT',

    // 批量用户NFT变更
    MultiUpdateUserNFT = 'MultiUpdateUserNFT',

    // 使用消耗品
    UseConsumabled = 'UseConsumabled',

    // 穿装备
    UseEquipment  = 'UseEquipment',

    // 卸下装备
    UnloadEquipment = 'UnloadEquipment',

    // MELD期货创建
    MELDFutureMint = 'MELDFutureMint',

    // 
    MELDFutureExchangeRateChange = 'MELDFutureExchangeRateChange',

    MELDFutureRelease = 'MELDFutureRelease',

    MELDExchange2Ditamin = 'MELDExchange2Ditamin',

    MarketplaceTrade = 'MarketplaceTrade',

    DitaminProduce = 'DitaminProduce',
    DitaminBurn = 'DitaminBurn',

    // 角色死亡
    PlayerDeath = 'PlayerDeath',

    // 角色复活
    PlayerReborn = 'PlayerReborn',

    // 角色击杀
    PlayerKilled = 'PlayerKilled',

    // 完成问题
    FinishQuestion = 'FinishQuestion',
}

export enum PVPSubscriptionEvent {
    // PVP 匹配开始
    PVPMatchBegin = 'PVPMatchBegin',
}