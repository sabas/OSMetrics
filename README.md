OSMetrics
=========

An OSMjs script to calculate raw statistics from an OSM extract (*.osm, *.osm.bz2, *.pbf).

This is starting from the [OSMQualityMetrics](https://github.com/mvexel/OSMQualityMetrics) code by mvexel,
expanding to add new metrics.

Compiling
---------

To use this scripts you need osmjs, which is part of [osmium](https://github.com/joto/osmium).
Ubuntu packages:
```
sudo apt-get install g++ libboost-dev zlib1g-dev libshp-dev libgd2-xpm-dev 
    libgdal1-dev libexpat1-dev libgeos++-dev libsparsehash-dev 
    libv8-dev libicu-dev libprotobuf-dev protobuf-compiler doxygen
    libboost-test-dev libosmpbf-dev
```

Installing osmium and compiling osmjs:
```
git clone https://github.com/joto/osmium.git
cd osmium/
make doc
sudo make install
cd osmjs/
make
sudo make install
```

Installing this project (in another folder, for instance in home)
```
git clone https://github.com/sabas/OSMetrics.git
cd OSMetrics/
```
Usage
-----

Git clone or download and extract this repository in a folder, enter in it
and place the extract to be examined in the script folder and run
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
- Road Lengths: a calculation done on the navigable road network
