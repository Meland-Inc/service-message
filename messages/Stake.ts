export interface UserStakeAdd {
    stakeLevel: string;

    amountOfMELD: string;

    userBlockchainAddress: string;
}

export interface UserStakeExpire {
    stakeLevel: string;

    amountOfMELD: string;

    userBlockchainAddress: string;
}

export interface UserStakeClaim {
    stakeLevel: string;

    amountOfMELD: string;

    userBlockchainAddress: string;
}

export interface UserStakeHarvest {
    harvestAmountOfMELD: string;
    userBlockchainAddress: string;
}