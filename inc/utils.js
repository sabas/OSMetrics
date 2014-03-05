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
    var lat1=node1[1]; //y
    var lat2=node2[1];
    var lon1=node1[0]; //x
    var lon2=node2[0];
    var R = 6372797.560856;

    var dlat = (lat2-lat1).toRad();
    var dlon = (lon2-lon1).toRad();

	var lonh=Math.sin(dlon*0.5);
	lonh*=lonh;
	
	var lath=Math.sin(dlat*0.5);
	lath*=lath;
	
	var tmp= Math.cos(lat1.toRad())*Math.cos(lat2.toRad());

    return 2*R*Math.asin(Math.sqrt(lath+tmp*lonh));
}

function sortObject(obj) {
    var arr = [];
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            arr.push({
                'key': prop,
                'value': obj[prop]
            });
        }
    }
    arr.sort(function(a, b) { return b.value - a.value; });
    return arr; // returns array
}

