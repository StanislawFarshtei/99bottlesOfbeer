
class HouseKeeper {
    constructor(yearsOfExperience, name, cleaningRepertoire) {
        this.yearsOfExperience = yearsOfExperience;
        this.name = name;
        this.cleaningRepertoire = cleaningRepertoire;
    }

    canClean() {
        console.log("I can clean your room, sir");
    }
}

const houseKeeper1 = new HouseKeeper(12, "Jane", ["bathroom", "lobby", "bedroom"]);
const houseKeeper2 = new HouseKeeper(30, "Frosia", ["presidential suite", "luxury apartments"]);
console.log(houseKeeper1);
console.log(houseKeeper1.canClean());
console.log(houseKeeper2);
console.log(houseKeeper2.canClean());
