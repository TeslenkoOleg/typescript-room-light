const WORKING_TIME = 60000;
class LightBulb {
    constructor() {
        this._isOn = false;
        this._isBroken = false;
    }
    isOn() {
        return this._isOn;
    }
    isBroken() {
        return this._isBroken;
    }
    turnOn() {
        if (!this._isBroken) {
            this._isOn = true;
        }
    }
    turnOff() {
        this._isOn = false;
    }
    break() {
        this._isBroken = true;
        this._isOn = false;
    }
    fix() {
        this._isBroken = false;
    }
}
class Room {
    constructor(lightBulb) {
        this._lightBulb = lightBulb;
    }
    changeLightBulb(lightBulb) {
        this._lightBulb = lightBulb;
    }
    getLightBulb() {
        return this._lightBulb;
    }
}
class Person {
    enterRoom(room) {
        console.log("Entering room...");
        // Checking if the light bulb is there
        const lightBulb = room.getLightBulb();
        if (lightBulb) {
            console.log("Light bulb is present in the room.");
            // Changing the light bulb to a red one
            const newLightBulb = new LightBulb();
            room.changeLightBulb(newLightBulb);
            console.log("Changed light bulb to red.");
            // Switching the light bulb on
            newLightBulb.turnOn();
            console.log("Turned the light bulb on.");
        }
        else {
            console.log("No light bulb found in the room.");
        }
    }
    leaveRoom() {
        console.log("Leaving room...");
        console.log("Closing the door.");
    }
}
function getRandomRoom(rooms) {
    const randomIndex = Math.floor(Math.random() * rooms.length);
    return rooms[randomIndex];
}
function simulateBreakage(rooms) {
    setTimeout(() => {
        const roomToBreak = getRandomRoom(rooms);
        const lightBulb = roomToBreak.getLightBulb();
        if (lightBulb) {
            lightBulb.break();
            console.log("A light bulb broke in a room.");
        }
    }, 10000);
}
function main() {
    const startTime = Math.floor(Date.now() / 1000); // in seconds
    const redLightBulb = new LightBulb();
    const greenLightBulb = new LightBulb();
    const blueLightBulb = new LightBulb();
    const room1 = new Room(redLightBulb);
    const room2 = new Room(greenLightBulb);
    const room3 = new Room(blueLightBulb);
    const person = new Person();
    // Task 1
    person.enterRoom(room1);
    person.leaveRoom();
    // Task 2
    const rooms = [room1, room2, room3];
    rooms.forEach(room => { var _a; return (_a = room.getLightBulb()) === null || _a === void 0 ? void 0 : _a.turnOn(); });
    simulateBreakage(rooms);
    const interval = setInterval(() => {
        rooms.forEach(room => {
            const lightBulb = room.getLightBulb();
            if (lightBulb && lightBulb.isBroken()) {
                lightBulb.fix();
                console.log("Replaced broken light bulb in a room.");
            }
        });
    }, 10000);
    //clear interval if working time is over
    setTimeout(() => {
        clearInterval(interval);
    }, WORKING_TIME);
    //
    // Task 4
    rooms[0].changeLightBulb(redLightBulb);
    rooms[1].changeLightBulb(greenLightBulb);
    rooms[2].changeLightBulb(blueLightBulb);
    rooms.forEach(room => { var _a; return (_a = room.getLightBulb()) === null || _a === void 0 ? void 0 : _a.turnOn(); });
}
main();
//# sourceMappingURL=index.js.map