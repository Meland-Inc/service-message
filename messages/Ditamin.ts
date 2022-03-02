export interface BurnDitaminInput {
    /**
     * 需要燃烧的用户id
     */
    userId: string;

    /**
     * 需要燃烧的ditamin数量
     */
    amount: string;

    /**
     * 燃烧的原因
     */
    remark: string;

    /**
     * 燃烧的hash id
     * 用来防止重复燃烧, 每次燃烧调用方需要生成一个txHash. 如果txHash重复, 则不会重复燃烧
     */
    txHash: string;
}

export interface BurnDitaminOutput {
    /**
     * 是否燃烧成功
     */
    burnSuccess: boolean;

    /**
     * 如果燃烧失败, 则返回失败原因, 否则返回空字符串
     */
    failedReason: string;
}