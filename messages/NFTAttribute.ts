export enum NFTTraitTypes {
    // 描述NFT的类型
    Type = 'Type',

    // 描述NFT的稀有度.
    Rarity = 'Rarity',

    // 描述NFT的系列.
    Series = 'Series',

    // 描述NFT的game cid
    ItemId = 'ItemId',

    // 描述可穿戴物品的穿戴部位
    WearingPosition = 'WearingPosition',

    // 描述NFT可放置的地块
    // 以","分割.
    // 比如同时支持VIP, Occupied 表示为 "VIP,Occupied"
    PlaceableLands = 'PlaceableLands',

    // 描述NFT的核心技能
    CoreSkillId = 'CoreSkillId',

    // 描述NFT的技能等级
    SkillLevel = 'SkillLevel',
}

export enum NFTTrait_WearingPosition {

}

export enum NFTTrait_SkillLevel {

}

/**
 * 核心技能id
 */
export enum NFTTrait_CoreSkillId {

}

/**
 * NFT 可放置的地块
 */
export enum NFTTrait_PlaceableLands {
    VIP = 'VIP',
    Occupied = 'Occupied',
    Ticket = 'Ticket',
}

/**
 * NFT 稀有度
 */
export enum NFTTrait_Rarity {
    unique = 'unique',
    mythic = 'mythic',
    epic = 'epic',
    rare = 'rare',
    common = 'common',
}

/**
 * NFT 类型
 */
export enum NFTTrait_Type {
    Placeable = 'Placeable',

    MysteryBox = 'MysteryBox',

    Wearable = 'Wearable',
}