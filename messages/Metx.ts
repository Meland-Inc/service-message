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

export interface SendMetaTxInput {
    to: string;

    value: string;

    gas: number;

    data: string;
}

export interface SendMetaTxOutput {
    txId: string;
}