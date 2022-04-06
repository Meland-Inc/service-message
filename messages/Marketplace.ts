import { NFT } from './NFT';

export interface MarketplaceTrade {
    tokenType: string;

    tokenAmount: string;

    nft: NFT;

    txn: string;

    chainName: string;
}