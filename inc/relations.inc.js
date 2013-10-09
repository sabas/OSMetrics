function beforeRelations() {
    print('Starting with relations');
}

function relations() {
    crel++;
    addUser(this.uid,this.user);
    users[this.uid].relations+=1;
}

function afterRelations() {
   print('Ended processing relations');
}
