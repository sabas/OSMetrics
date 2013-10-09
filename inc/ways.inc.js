function beforeWays() {
    print('Starting with ways and areas');
}

function ways() {
	cway++;
    addUser(this.uid,this.user);
    users[this.uid].ways+=1;
}

function afterWays() {
    print('Ended processing ways and areas');
}

function area() {
	carea++;
    addUser(this.uid,this.user);
    users[this.uid].areas+=1;
}
