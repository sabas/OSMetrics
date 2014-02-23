function end() {
print("Count node "+cnode);
print("Count way "+cway);
print("Count rel "+crel);
print("Count area "+careaway);
print("Count area rel "+carearel);
print("Count buildings "+cbui);
print('Highway count '+croad);
print('Navigable highway count '+cnavi);
print('TOTAL LENGTH ->'+roadlength);

users.sort(sort_by_rank);

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


var out = Osmium.Output.CSV.open(dir + 'userladder.csv');
out.print('uid\tusername\trank\tnodes\tways\trelations\tareas_way\tareas_rel\tlastedit');
    for (var i=0;i<users.length;i++) {
        if(typeof(users[i])=='undefined') continue;
        out.print(users[i].uid, users[i].name, users[i].rank(), users[i].nodes, users[i].ways, users[i].relations, users[i].areaways, users[i].arearels, users[i].lastedit);
        }
out.close();

var out = Osmium.Output.CSV.open(dir + 'buildings.csv');
out.print('building\tcount');
    for (var type in building) {
        out.print(type,building[type]);
        }
out.close();

var out = Osmium.Output.CSV.open(dir + 'relations.csv');
out.print('type\tcount');
    for (var type in relation_types) {
        out.print(type,relation_types[type]);
        }
out.close();

var out = Osmium.Output.CSV.open(dir + 'roadlengths.csv');
out.print('type\tcount');
    for (var len in lengths) {
        out.print(len,lengths[len]);
        }
out.close();

    print('End!');
}
