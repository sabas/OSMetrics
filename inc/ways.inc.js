function beforeWays() {
    print('Starting with ways and areas');
}

function ways() {
    cway++;
    addUser(this.uid,this.user);
    users[this.uid].ways+=1;

    var navi='NULL';
    for(var key in this.tags) {
        if (key.match(/building/i)) {
    	    cbui++;
            building[this.tags[key]] = isNaN(building[this.tags[key]]) ? 1 : building[this.tags[key]] + 1; 
        }
        if (key.match(/highway/i)) {
            croad+=1;
            if (navigablehighwayvalues.indexOf(this.tags[key]) > -1)
            {
            cnavi += 1;
            navi=this.tags[key];
            }
	    }
    }
    var d=new Date(this.timestamp).getTime() / 1000;
    if(d>users[this.uid].lastedit) users[this.uid].lastedit=d;

    var points=this.geom.toArray();

    if(navi!='NULL')
    {
    var len=0;
    for (var i=0;i<points.length-1;i++)
    {
        if(points[0][0]==0 || points[0][1]==0 || points[1][0]==0 || points[1][1]==0) { print("Node in null island"); continue;}
        var distance=haversine(points[i],points[i+1]);
        len+=distance;
    }
    if (!lengths[navi]) lengths[navi]=0;
    lengths[navi]+=len;
    roadlength+=len;
    }
}

function afterWays() {
    print('Ended processing ways and areas');
}

function area() {
    addUser(this.uid,this.user);
    /* probably double counts ways and areas */
    if(this.from=="way"){
    users[this.uid].areaways+=1;
    careaway++;
    }
    if(this.from=="relation"){
    users[this.uid].arearels+=1;
    carearel++;
    }


    for(var key in this.tags) {
        if (key.match(/building/i)) {
    	    cbui++;
            building[this.tags[key]] = isNaN(building[this.tags[key]]) ? 1 : building[this.tags[key]] + 1; 
        }
    }
    var d=new Date(this.timestamp).getTime() / 1000;
    if(d>users[this.uid].lastedit) users[this.uid].lastedit=d;
}
