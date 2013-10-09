function end() {
print("Count node "+cnode);
print("Count way "+cway);
print("Count rel "+crel);
print("Count area "+carea);
users.sort(sort_by_rank);

 var out = Osmium.Output.CSV.open(dir + 'userladder.csv');
out.print('uid\tusername\trank\tnodes\tways\trelations\tareas');
    for (var i=0;i<users.length;i++) {
        if(typeof(users[i])=='undefined') continue;
        out.print(users[i].uid, users[i].name, users[i].rank(), users[i].nodes, users[i].ways, users[i].relations, users[i].areas);
        }
 out.close();
    print('End!');
}
