function beforeNodes() {
    print('Starting with nodes');
}

function nodes() {
	cnode++;
    addUser(this.uid,this.user);
    users[this.uid].nodes+=1;
    var d=new Date(this.timestamp).getTime() / 1000;
    if(d>users[this.uid].lastedit) users[this.uid].lastedit=d;
}

function afterNodes() {
    print('Ended processing nodes');
}
