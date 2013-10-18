function beforeWays() {
    print('Starting with ways and areas');
}

function ways() {
    cway++;
    addUser(this.uid,this.user);
    users[this.uid].ways+=1;

    cbui++;
    for(var key in this.tags) {
        if (key.match(/building/i)) {
            building[this.tags[key]] = isNaN(building[this.tags[key]]) ? 1 : building[this.tags[key]] + 1; 
        }
    }
}

function afterWays() {
    print('Ended processing ways and areas');
}

function area() {
    addUser(this.uid,this.user);
    /* probably double counts ways and areas */
    if(this.from=="way"){
    users[this.uid].areaways+=1;
    careaway++;
    }
    if(this.from=="relation"){
    users[this.uid].arearels+=1;
    carearel++;
    }

    cbui++;
    for(var key in this.tags) {
        if (key.match(/building/i)) {
            building[this.tags[key]] = isNaN(building[this.tags[key]]) ? 1 : building[this.tags[key]] + 1; 
        }
    }
}
