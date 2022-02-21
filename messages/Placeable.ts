/**
 * @TJS-type integer
 */
interface Int32 extends Number { };

export interface Skill{  
    /**
     *  skill Id,  only key
     */     
    skillId: Int32;

    /**
     *  skill level 
     */   
    level: Int32;  
}

/** 
 * 攻占地格 请求地格中产生效果的skill
 */
export interface LandUsingSkillInput{
    /**
     * 消息版本号
     */
    etag: Int32;

    /**
     *  地格ID
     */
    tileId: Int32;

    /**
     *  攻占者ID
     */
    userId: string
}

/** 
 * 攻占地格 请求地格skill返回
 */
export interface LandUsingSkillOutput{
    /**
     * 消息版本号
     */
    etag: Int32;

    /**
     *  地格ID
     */
    tileId: Int32;

    /**
     *  攻占者ID
     */
    userId: string

    /**
     * Skill List
     */
    skillList: Skill[];
}