// 当用户完成一个quiz时触发
export interface FinishQuestion {

    // 题目类型
    type: string,

    // 题目id
    questionId: string;

    // 题目难度
    level: string;

    // 完成情况
    // 回答正确和失败
    result: string;

    // 答题结果对当前题型难度的影响，降难度、难度不变、提高难度分别为-1,0,1
    diffcultyChange: number;
}