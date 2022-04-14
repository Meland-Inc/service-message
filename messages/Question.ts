/**
 * @TJS-type integer
 */
type Int32 = number;
type integer = Int32;

// 当用户完成一个quiz时触发
export interface FinishQuestion {
    // 答题的用户
    userId: string;

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

    /**
     * 消息版本号
     */
    etag: integer;
}

export interface Question {
    // 题目id
    questionId: string;

    // 题目难度
    level: string;

    // 题目类型
    type: QuestionType;

    // 题目内容
    data: string;
}

export enum QuestionType {
    // 单选
    SingleChoice = 'SingleChoice',

    // 匹配鼹鼠
    MatchingMouse = 'MatchingMouse',

    // 快闪记忆
    QuickFlashMemory = 'QuickFlashMemory',

    // 顺序气球
    SequenceBalloon = 'SequenceBalloon',

    // 裁剪艺术
    CuttingArt = 'CuttingArt',

    // 旋转剪影
    RotatingSilhouette = 'RotatingSilhouette',

    // 积木计算
    BlockCompute = 'BlockCompute',

    // 调整时钟
    AdjustClock = 'AdjustClock',

    // 敲砖块
    HitBrick = 'HitBrick',

    // 鸟笼棋牌
    CageShuffle = 'CageShuffle',

    // 反转记忆
    ReverseMemory = 'ReverseMemory',

    // 卡片记忆
    CardMemory = 'CardMemory',
}

export interface GetQuestionsByTypesRandomInput {
    // 题目类型
    types: QuestionType[];

    // 获取的数量
    limit: number;
}

export interface GetQuestionsByTypesRandomOutput {
    questions: Question[];
}