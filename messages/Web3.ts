export interface GetUserWeb3ProfileInput {
    // 用户id
    userId: string;
}

export interface GetUserWeb3ProfileOutput {
    // 用户的以太坊钱包地址
    blockchainAddress: string;
}