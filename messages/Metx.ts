export interface SendTxInput {
    from: string;

    to: string;

    value: string;

    gas: number;

    nonce: string;

    data: string;

    signature: string;
}

export interface SendTxOutput {
    txId: string;
}