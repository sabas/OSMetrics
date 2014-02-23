var ranking = {nodes:1,ways:3,areas:6,relations:9};
function User(uid,name) {
    this.uid=uid;
    this.name=name;
    this.nodes=0;
    this.ways=0;
    this.areaways=0;
    this.arearels=0;
    this.relations=0;
    this.lastedit=0;
}

User.prototype.rank = function(){return this.nodes*ranking.nodes + this.ways*ranking.ways+ this.relations*ranking.relations+ this.areaways*ranking.areas+ this.arearels*ranking.areas};

function sort_by_rank(a,b) {
    return ((a.rank() < b.rank()) ? 1 : (a.rank() > b.rank()) ? -1 : 0);
}

function sort_by_totals(a,b) {
    return ((a.nodes + a.ways + a.relations + a.areaways + a.arearels) < (b.nodes + b.ways + b.relations + b.areaways + b.arearels) ? 1 : (a.nodes + a.ways + a.relations + a.areaways + a.arearels) > (b.nodes + b.ways + b.relations+ b.areaways + b.arearels) ? -1 : 0);
}

function addUser(uid,user){
    if(!users[uid]) {
        users[uid] = new User(uid,user);
    }
}

function Node(id,lat,lon){
    this.id=id;
    this.lat=lat;
    this.lon=lon;
}

function addNode(id,node){
    if(!nodes[id]) {
        nodes[id] = new Node(id,node.geom.lat,node.geom.lon);
    }
}

if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
}

function haversine(node1,node2)
{
    var lat1=node1[1].toRad();
    var lat2=node2[1].toRad();
    var lon1=node1[0].toRad();
    var lon2=node2[0].toRad();
    var R = 6371;

    var dlat = (lat2-lat1);
    var dlon = (lon2-lon1);

		var a  = Math.pow(Math.sin(dlat/2),2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon/2),2);
		var c  = 2 * Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
		var dk = c * R;
    return dk;
}
