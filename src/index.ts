import {Room} from "./classes/room";
import {LightBulb} from "./classes/lightBulb";
import {Person} from "./classes/person";
import {config} from "./config/config";
import {fixAllBrokenLightBulbs, simulateBreakage, timeout} from "./utils/utils";
import {LightBulbColor} from "./enums/enums";

async function main(): Promise<void> {

    const redLightBulb = new LightBulb();
    const greenLightBulb = new LightBulb(LightBulbColor.Green);
    const blueLightBulb = new LightBulb(LightBulbColor.Blue);

    const room1 = new Room(redLightBulb);
    const room2 = new Room(greenLightBulb);
    const room3 = new Room(blueLightBulb);

    const person = new Person();
    const rooms = [room1, room2, room3];

    // Task 1
    console.log("Task 1 started...");
    person.enterRoom(room1, true, LightBulbColor.Red);
    person.leaveRoom();
    console.log("Task 1 finished...");

    // Task 2
    console.log("Task 2 started...");
    rooms.forEach(room => room.getLightBulb()?.turnOn());

    await timeout(config.breakTime);
    simulateBreakage(rooms);

    //use recursion to fix all broken light bulbs
     fixAllBrokenLightBulbs(rooms, 0);

     setTimeout(() => {
         console.log("Task 2 finished...");
         process.exit(0);
     }, config.maxWorkingTime);

 // Task 3
    console.log("Task 3 started...");
    rooms[0].changeLightBulb(redLightBulb);
    rooms[1].changeLightBulb(greenLightBulb);
    rooms[2].changeLightBulb(blueLightBulb);
    rooms.forEach(room => room.getLightBulb()?.turnOn());
    console.log("Task 3 finished...")

}

main();


