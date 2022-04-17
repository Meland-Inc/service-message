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