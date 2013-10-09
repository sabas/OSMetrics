function beforeNodes() {
    print('Starting with nodes');
}

function nodes() {
	cnode++;
    addUser(this.uid,this.user);
    users[this.uid].nodes+=1;
}

function afterNodes() {
    print('Ended processing nodes');
}
