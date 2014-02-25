
var cnode=0, cway=0, crel=0, careaway=0, carearel=0;

var users = [];
var nodes = [];

/* add a list of user accounts which do imports, TODO */
var importusers=[];

/* building=yes vs building=* */
var building={};
var cbui=0;

/* relations */

var relation_types = {};

 //navigable roads
var croad=0;
var cnavi=0;
var roadlength=0;
var lengths={};

var t0=0,t1=0;
function start() {
	t0=new Date();
    print('Start!');
}
