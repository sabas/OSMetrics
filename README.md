OSMetrics
=========

Yet another OSMJS script.
This is starting from the OSMQualityMetrics by mvexel (https://github.com/mvexel/OSMQualityMetrics).

Usage
-----

Prerequisites are osmium framework (https://github.com/joto/osmium) and its javascript bindings (osmjs).

To run it, place the extract to be examined in the script folder and run
```
osmjs -j stats.js -m -l sparsetable region.pbf 2> out/error.txt
```
Argument "-m" is needed to detect areas (closed simple ways or multipolygons).

stderr redirection is useful to take out the warnings given by Osmium and fix the related geometry errors as:
- multipolygons with one member
- single node ways

All results go to out/ folder.

Features
--------

Callbacks are grouped in include files.

- Totals: csv contains global counts (total number of nodes, ways etcetera)
- User Ladder: csv with nodes, ways, relations, areas and the calculated rank
- Buildings: all the building values
- Relations: all the relation types
- Road Lenghts: a calculation done on the navigable road network

