// Only change code below this line
class Thermostat {
    constructor(fahren){
        this.fahren = fahren;
    }

    get temperature(){
        let celc =  ((5/9) *(this.fahren - 32));
        return celc;
    }
    set temperature(celtemp){
        this.fahren = ((celtemp * 9)/5 + 32);
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
