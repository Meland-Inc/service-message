export interface GetUserRecipesInput {
    userId: string;
}

export interface GetUserRecipesOutput {
    recipeIds: string[];
}

export interface MergeByRecipeInput {
    /**
     * 图鉴id
     */
    recipeId: string;

    /**
     * 合成数量
     */
    amount: number;

    /**
     * 合成的用户
     */
    userId: string;
}

export interface MergeByRecipeOutput {

}