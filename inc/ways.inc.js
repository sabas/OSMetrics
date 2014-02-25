function beforeWays() {
    print('Starting with ways and areas');
}

function ways() {
    cway++;
    addUser(this.uid,this.user);
    users[this.uid].ways+=1;

    var khigh='NULL';
    for(var key in this.tags) {
		//if(key=="amenity") print(key+this.tags[key]+' '+key.match(/^building$/i));
        if (key==="building") {
    	    cbui++;
    	    print(key+' '+this.tags[key]+' '+this.id);
            building[this.tags[key]] = isNaN(building[this.tags[key]]) ? 1 : building[this.tags[key]] + 1; 
        }
        if (key.match(/highway/i)) {
            croad+=1;
            khigh=this.tags[key];
            if (navigablehighwayvalues.indexOf(this.tags[key]) > -1)
            {
            cnavi += 1;
            }
	    }
    }
    var d=new Date(this.timestamp).getTime() / 1000;
    if(d>users[this.uid].lastedit) users[this.uid].lastedit=d;

    if(khigh!='NULL'){
    var points=this.geom.toArray();
        if(points[0][0]==0 || points[0][1]==0 || points[1][0]==0 || points[1][1]==0) { print("id "+this.id+": Node in null island"); return;}
    var len=0;
    for (var i=0;i<points.length-1;i++)
    {
        var distance=haversine(points[i],points[i+1]);
        len+=distance;
    }
    if (!lengths[khigh]) lengths[khigh]=0;
    len=len/1000; //km instead of m
    lengths[khigh]+=len;
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
        if (key==="building") {
    	    cbui++;
            building[this.tags[key]] = isNaN(building[this.tags[key]]) ? 1 : building[this.tags[key]] + 1; 
        }
    }
    var d=new Date(this.timestamp).getTime() / 1000;
    if(d>users[this.uid].lastedit) users[this.uid].lastedit=d;
}
