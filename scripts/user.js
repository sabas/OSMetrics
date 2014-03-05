var user="OSMF Redaction Account";

    Osmium.Callbacks.init = function init() {
    print('INIT');
};

    Osmium.Callbacks.before_nodes= function bn() {print('Nodes');};
    Osmium.Callbacks.node= function nodes() {

    if(this.user==user) print('http://openstreetmap.org/node/'+this.id);
};

    Osmium.Callbacks.before_ways= function bw() {print('Ways');};
    Osmium.Callbacks.way= function ways() {
    if(this.user==user) print('http://openstreetmap.org/way/'+this.id);
};
    Osmium.Callbacks.area= function areas() {
    if(this.user==user) print('http://openstreetmap.org/relation/'+this.id);
};
    Osmium.Callbacks.before_relations= function br() {print('Relations');};
    Osmium.Callbacks.relation= function relations() {
    if(this.user==user) print('http://openstreetmap.org/relation/'+this.id);
};
    Osmium.Callbacks.end= function count() {
    
};
