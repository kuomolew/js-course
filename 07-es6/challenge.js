class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }

}

class Park extends Element {
    constructor(name, buildYear, area, treesNumber) {
        super(name, buildYear);
        this.area = area;
        this.treesNumber = treesNumber;
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 'normal') {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
}

// all information about our city
let town = {
    parks: {
        name: [],
        buildYear: [],
        area: [],
        treesNumber: []
    },
    streets: {
        name: [],
        buildYear: [],
        length: [],
        size: []
    }
};

// adding new park or street to our town
function addNewElement(el) {
    if (el.constructor.name === 'Park') {
        let place = town.parks;
        place.name.push(el.name);
        place.buildYear.push(el.buildYear);
        place.area.push(el.area);
        place.treesNumber.push(el.treesNumber);
    } else if (el.constructor.name === 'Street') {
        let place = town.streets;
        place.name.push(el.name);
        place.buildYear.push(el.buildYear);
        place.length.push(el.length);
        place.size.push(el.size);
    }   
}


// adding parks
const greenPark = new Park ('Green Park', 1948, 0.9, 953);
const nationalPark = new Park ('National Park', 1917, 2.9, 3532);
const oakPark = new Park('Oak Park', 1965, 0.43, 998);

addNewElement(greenPark);
addNewElement(nationalPark);
addNewElement(oakPark);

// adding streets
const oceanAve = new Street('Ocean Avenue', 1999, 3.2, 'big');
const evergreenStr = new Street('Evergreen Street', 2008, 1.2, 'small');
const fourthStr = new Street('4th Street', 2015, 2.2);
const sunsetBou = new Street('Sunset Boulevard', 1982, 4.6, 'tiny');

addNewElement(oceanAve);
addNewElement(evergreenStr);
addNewElement(fourthStr);
addNewElement(sunsetBou);


// counting of general park report
function parksReport() {
    const names = town.parks.name;
    const years = town.parks.buildYear;
    const trees = town.parks.treesNumber;
    const areas = town.parks.area;
    
    const number = names.length;

    // average age of parks calculating
    function averageParkAge() {
        let sum = 0;
        for (el of years) {
            let age = new Date().getFullYear() - el;
            sum += age;
        }
        const average = sum / number;
        console.log(`Our ${number} parks have an average age of ${average} years.`);
    }

    // Tree dencity for every park calculating
    function treeDensity() {
        for (let i = 0; i < number; i++) {
            let dencity = trees[i] / areas[i];
            console.log(`${names[i]} has a tree density of ${dencity} trees per square km.`);
        }
    }

    // Find a park that has more than 1000 trees
    function moreThan1000() {
        const index = trees.findIndex(cur => cur >= 1000);
        
        console.log(`${names[index]} has more than 1000 trees.`);
    }

    console.log('----PARKS REPORT----');
    averageParkAge();
    treeDensity();
    moreThan1000();
}

// general streets report
function streetsReport() {
    const names = town.streets.name;
    const years = town.streets.buildYear;
    const length = town.streets.length;
    const size = town.streets.size;

    number = names.length;

    // counting of total and average length of all streets 
    function totalAverageLength() {
        let total, average;
        total = 0;
        for (cur of length) {
            total += cur;
        }
        average = total / number;
        console.log(`Our ${number} streets have a total length of ${total} km, with an average of ${average} km.`);
    }

    // size classification
    function sizeClassification(){
        for (let i = 0; i < number; i++) {
            if (length[i] <= 0.5){
                size[i] = 'tiny';
            } else if (length[i] > 0.5 && length[i] <= 1) {
                size[i] = 'small';
            } else if (length[i] > 1 && length[i] <= 2) {
                size[i] = 'normal';
            } else if (length[i] > 2 && length[i] <=3) {
                size[i] = 'big';
            } else if (length[i] > 3) {
                size[i] = 'huge';
            } else {
                size[i] = 'normal';
            }

            console.log(`${names[i]}, built in ${years[i]}, is a ${size[i]} street.`);
        }
    }

    console.log('----STREETS REPORT----');
    totalAverageLength();
    sizeClassification();
}


parksReport();
streetsReport();