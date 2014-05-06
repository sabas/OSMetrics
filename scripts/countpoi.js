var poi=['amenity=restaurant','natural=peak'];
var poik=[];
    Osmium.Callbacks.init = function init() {
    print('INIT');
};

for(var i in poi)
{
poik[poi[i]]=0;
}

    Osmium.Callbacks.before_nodes= function bn() {print('Nodes');};
    Osmium.Callbacks.node= function nodes() {
    for(var key in this.tags) {
		for (var i in poi){
			var p=poi[i].split("=");
			if(key===p[0] && this.tags[key]===p[1])
			poik[poi[i]]++;
		}
	}
};

    Osmium.Callbacks.before_ways= function bw() {print('Ways');};
    Osmium.Callbacks.way= function ways() {
    for(var key in this.tags) {
		for (var i in poi){
			var p=poi[i].split("=");
			if(key===p[0] && this.tags[key]===p[1])
			poik[poi[i]]++;
		}
	}
};
    Osmium.Callbacks.area= function areas() {
/*
    for(var key in this.tags) {
		for (var i in poi){
			var p=poi[i].split("=");
			if(key===p[0] && this.tags[key]===p[1])
			poik[poi[i]]++;
		}
	}*/
};
    Osmium.Callbacks.before_relations= function br() {print('Relations');};
    Osmium.Callbacks.relation= function relations() {
    for(var key in this.tags) {
		for (var i in poi){
			var p=poi[i].split("=");
			if(key===p[0] && this.tags[key]===p[1])
			poik[poi[i]]++;
		}
	}
};
    Osmium.Callbacks.end= function count() {
    for(var i in poi)
{
print(poi[i],poik[poi[i]]);
}
};
