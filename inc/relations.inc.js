function beforeRelations() {
    print('Starting with relations');
}

function relations() {
    crel++;
    addUser(this.uid,this.user);
    users[this.uid].relations+=1;

    for(var key in this.tags) {
        if (key.match(/type/i)) {
            relation_types[this.tags[key]] = isNaN(relation_types[this.tags[key]]) ? 1 : relation_types[this.tags[key]] + 1; 
        }
    }
    var d=new Date(this.timestamp).getTime() / 1000;
    if(d>users[this.uid].lastedit) users[this.uid].lastedit=d;
}

function afterRelations() {
   print('Ended processing relations');
}
