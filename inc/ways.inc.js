function beforeWays() {
    print('Starting with ways and areas');
}

function ways() {
    cway++;
    addUser(this.uid,this.user);
    users[this.uid].ways+=1;
    /*if("building" in this.tags)
        if(this.tags["building"]=='yes') buildingyes+=1;
        else buildingother+=1;*/
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
}
