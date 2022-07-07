/**
 * @TJS-type integer
 */
type Int32 = number;
type integer = Int32;

export interface UseMELDInput {
    /**
     * 使用金额
     */
    amount: integer;

    /**
     * 用户id
     */
    userId: string;
}

export interface UseMELDOutput {
    /**
     * 是否成功
     */
    success: boolean;

    /**
     * 如果燃烧失败, 则返回失败原因, 否则返回空字符串
     */
    failedReason: string;
}