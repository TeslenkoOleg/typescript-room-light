import { Person } from '../classes/person';
import { Room } from '../classes/room';
import { LightBulb } from '../classes/lightBulb';
import {LightBulbColor} from "../enums/enums";

describe('Person', () => {
    let person: Person;
    let room: Room;

    beforeEach(() => {
        person = new Person();
        room = new Room(new LightBulb(LightBulbColor.Green));
    });

    it('should enter a change a color', () => {
        const color = LightBulbColor.Green;
        const lightBulb = room.getLightBulb();
        expect(lightBulb).toBeTruthy();

        room.changeLightBulb(lightBulb);
        expect(lightBulb.color).toBe(color);
    });

    it('should turn on the light bulb', () => {
        const lightBulb = room.getLightBulb();
        expect(lightBulb.isOn()).toBe(false);

        lightBulb.turnOn();
        expect(lightBulb.isOn()).toBe(true);
    });
});
