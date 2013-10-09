var ranking = {nodes:1,ways:3,areas:6,relations:9};
function User(uid,name) {
    this.uid=uid;
    this.name=name;
    this.nodes=0;
    this.ways=0;
    this.areas=0;
    this.relations=0;
}

User.prototype.rank = function(){return this.nodes*ranking.nodes + this.ways*ranking.ways+ this.relations*ranking.relations+ this.areas*ranking.areas};

function sort_by_rank(a,b) {
    return ((a.rank() < b.rank()) ? 1 : (a.rank() > b.rank()) ? -1 : 0);
}

function sort_by_totals(a,b) {
    return ((a.nodes + a.ways + a.relations + a.areas) < (b.nodes + b.ways + b.relations + b.areas) ? 1 : (a.nodes + a.ways + a.relations + a.areas) > (b.nodes + b.ways + b.relations+ b.areas) ? -1 : 0);
}

function addUser(uid,user){
    if(!users[uid]) {
        users[uid] = new User(uid,user);
    }
}
