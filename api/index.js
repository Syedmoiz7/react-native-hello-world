import Chance from "chance";

const chance = Chance()

const fakeUserData = () => {
    console.log(  chance.name({ middle: true }));
}

fakeUserData()