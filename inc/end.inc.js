function end() {
t1=new Date();
print('Time elapsed '+(t1-t0)+' ms');
print('End!');
print("TOTALS");
print("Count node "+cnode);
print("Count way "+cway);
print("Count relations "+crel);
print("Count area "+careaway);
print("Count area relations "+carearel);
print("Count buildings "+cbui);
print('Highway count '+croad);
print('Navigable highway count '+cnavi);
print('Road network length '+roadlength +' km');

/*totals*/
var out = Osmium.Output.CSV.open(dir + 'totals.csv');
out.print('parameter\tvalue');
out.print("Count node",cnode);
out.print("Count way",cway);
out.print("Count rel",crel);
out.print("Count area",careaway);
out.print("Count area rel",carearel);
out.print("Count buildings",cbui);
out.print('Highway count',croad);
out.print('Navigable highway count',cnavi);
out.close();

/*user ladder*/
users.sort(sort_by_rank);
var out = Osmium.Output.CSV.open(dir + 'userladder.csv');
out.print('uid\tusername\trank\tnodes\tways\trelations\tareas_way\tareas_rel\tlastedit');
    for (var i=0;i<users.length;i++) {
        if(typeof(users[i])=='undefined') continue;
        out.print(users[i].uid, users[i].name, users[i].rank(), users[i].nodes, users[i].ways, users[i].relations, users[i].areaways, users[i].arearels, users[i].lastedit);
        }
out.close();

/*buildings*/
building=sortObject(building);
var out = Osmium.Output.CSV.open(dir + 'buildings.csv');
out.print('building\tcount');
	for(var i=0;i<building.length;i++){
        out.print(building[i]['key'],building[i]['value']);
    }
out.close();

/*relations*/
relation_types=sortObject(relation_types);
var out = Osmium.Output.CSV.open(dir + 'relations.csv');
out.print('type\tcount');
	for(var i=0;i<relation_types.length;i++){
        out.print(relation_types[i]['key'],relation_types[i]['value']);
        }
out.close();

/*road length*/
lengths=sortObject(lengths);
var out = Osmium.Output.CSV.open(dir + 'roadlengths.csv');
out.print('type\tcount');
	for(var i=0;i<lengths.length;i++){
        out.print(lengths[i]['key'],lengths[i]['value'].toFixed(3));
        }
out.close();
}
