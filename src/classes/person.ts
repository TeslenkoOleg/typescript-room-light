import {Room} from "./room";
import {LightBulb} from "./lightBulb";
import {LightBulbColor} from "../enums/enums";

export class Person {
    public enterRoom(room: Room, changeColor: boolean = false, color: LightBulbColor = LightBulbColor.Red): void {
        console.log("Entering room...");
        // Checking if the light bulb is there
        const lightBulb = room.getLightBulb();
        if (lightBulb) {
            console.log("Light bulb is present in the room.");
            if (changeColor) {
                // Changing the light bulb to a red one
            const newLightBulb = new LightBulb(color);
            room.changeLightBulb(newLightBulb);
            console.log("Changed light bulb to", newLightBulb.color);
            // Switching the light bulb on
            newLightBulb.turnOn();
            console.log("Turned the light bulb on.");
            }
            // Checking if the light bulb is broken
            if (lightBulb.isBroken()) {
                console.log("Light bulb is broken.");
                lightBulb.fix();
                console.log("Fixed the light bulb.");
                lightBulb.turnOn();
            } else {
                console.log("Light bulb is not broken.");
                lightBulb.turnOn();
            }

        } else {
            console.log("No light bulb found in the room.");
        }
    }

    public leaveRoom(): void {
        console.log("Leaving room...");
        console.log("Closing the door.");
    }

    public isOnLightBulb(room: Room): boolean {
        return room.getLightBulb()?.isOn() || false;
    }

    public turnOnLightBulb(room: Room): void {
        room.getLightBulb()?.turnOn();
    }
    public turnOffLightBulb(room: Room): void {
        room.getLightBulb()?.turnOff();
    }

}
