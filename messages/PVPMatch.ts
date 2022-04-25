import { PVPPlayer } from './PVP';
export interface CreatePVPRoomInput {
    
}

export interface CreatePVPRoomOutput {
    roomId: string;
}

export interface PVPRoomReadyInput {
    player: PVPPlayer;
    pvpRoomId: string;
}

export interface PVPRoomReadyOutput {

}

export interface PVPMatchEnterInput{
    userId: string;
}

export interface PVPMatchEnterOutput{
    succese: boolean;
}

export interface PVPMatchLeaveInput{
    userId: string;
}

export interface PVPMatchLeaveOutput{
    succese : boolean;
}
