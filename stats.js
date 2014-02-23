include("config.inc.js");

/* functions */
include("inc/utils.js");

include("inc/start.inc.js");
    Osmium.Callbacks.init = start

include("inc/nodes.inc.js");
    Osmium.Callbacks.before_nodes= beforeNodes;
    Osmium.Callbacks.node= nodes;
    Osmium.Callbacks.after_nodes= afterNodes;

include("inc/ways.inc.js");
    Osmium.Callbacks.before_ways= beforeWays;
    Osmium.Callbacks.way= ways;
    Osmium.Callbacks.area= area;
    Osmium.Callbacks.after_ways= afterWays;

include("inc/relations.inc.js");  
    Osmium.Callbacks.before_relations= beforeRelations;
    Osmium.Callbacks.relation= relations;
    Osmium.Callbacks.after_relations= afterRelations;

include("inc/end.inc.js");
    Osmium.Callbacks.end= end;
