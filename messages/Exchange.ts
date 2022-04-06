export interface MELDFutureMint {
    /**
     * 期货价值余额
     */
    futureAmount: string;

    /**
     * 花费多少ditamin
     */
    ditaminAmount: string;

    /**
     * 获得的用户钱包地址
     */
    userBlockchainAddress: string;
}

// 汇率变化
export interface MELDFutureExchangeRateChange {
    exchangeRate: string;
}

// 
export interface MELDFutureRelease {
    userBlockchainAddress: string;
    amountOfMELD: string;
}

// 
export interface MELDExchange2Ditamin {
    amountOfMELD: string;


    ditaminAmount: string;

    
    userBlockchainAddress: string;
}