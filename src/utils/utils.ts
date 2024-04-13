import {Room} from "../classes/room";

function getRandomRoom(rooms: Room[]): Room {
    const randomIndex = Math.floor(Math.random() * rooms.length);
    return rooms[randomIndex];
}

export function simulateBreakage(rooms: Room[]): void {
        const roomToBreak = getRandomRoom(rooms);
        const lightBulb = roomToBreak.getLightBulb();
        if (lightBulb) {
            lightBulb.break();
            console.log("A light bulb broke in a room ", lightBulb.color);
        }
}
export async function timeout(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//recursion to fix all broken light bulbs
export function fixAllBrokenLightBulbs(rooms: Room[], roomNumber: number): void {
    if (roomNumber >= rooms.length) {
        return;
    }
    const lightBulb = rooms[roomNumber].getLightBulb();
    if (lightBulb && lightBulb.isBroken()) {
        lightBulb.fix();
        console.log("Replaced broken light bulb in a room", lightBulb.color);
    }
    roomNumber++;
    fixAllBrokenLightBulbs(rooms, roomNumber);
}
