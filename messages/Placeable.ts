/**
 * @TJS-type integer
 */
export type integer = number;

export interface Skill{  
    /**
     *  skill Id,  only key
     */     
    skillId: integer;

    /**
     *  skill level 
     */   
    level: integer;  
}

/** 
 * 攻占地格 请求地格中产生效果的skill
 */
export interface LandUsingSkillInput{
    /**
     * 消息版本号
     */
    etag: integer;

    /**
     *  地格ID
     */
    tileId: integer;

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
    etag: integer;

    /**
     *  地格ID
     */
    tileId: integer;

    /**
     *  攻占者ID
     */
    userId: string

    /**
     * Skill List
     */
    skillList: Skill[];
}