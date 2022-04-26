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
    player: PVPPlayer;
}

export interface PVPMatchEnterOutput{
    succese: boolean;
}

export interface PVPMatchLeaveInput{
    player: PVPPlayer;
}

export interface PVPMatchLeaveOutput{
    succese : boolean;
}
