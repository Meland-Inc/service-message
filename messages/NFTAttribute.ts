export enum NFTTraitTypes {
    // 描述NFT的类型
    Type = 'Type',

    // 描述NFT的稀有度.
    Rarity = 'Rarity',

    // 描述NFT的品质.
    Quality = 'Quality',

    // 描述NFT的系列.
    Series = 'Series',

    // 描述NFT的game cid
    ItemId = 'ItemId',

    // 描述可穿戴物品的穿戴部位
    WearingPosition = 'Wearing Position',

    // 描述NFT可放置的地块
    // 以","分割.
    // 比如同时支持VIP, Occupied 表示为 "VIP,Occupied"
    PlaceableLands = 'Placeable Lands',

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
 *  装备
Head Armor
Chest Armor
Legs Armor
Feet Armor
Hands Armor
Sword
Bow
Dagger
Spear
Consumable
Material
Placeable
MysteryBox
 */
export enum NFTTrait_Type {
    HeadArmor = 'Head Armor', // 头部装备
    ChestArmor = 'Chest Armor', // 胸部装备
    LegsArmor = 'Legs Armor', // 腿部装备
    FeetArmor = 'Feet Armor', // 脚部装备
    HandsArmor = 'Hands Armor', // 手部装备
    Sword = 'Sword', // 剑
    Bow = 'Bow', // 弓
    Dagger = 'Dagger', // 匕首
    Spear = 'Spear', // 枪
    Consumable = 'Consumable', // 消耗品
    Material = 'Material', // 材料
    Placeable = 'Placeable', // 可放置
    MysteryBox = 'MysteryBox', // 神秘宝箱
}