// rules of the existence
const eve = new Object();

eve.rules=[
	{
		"name":"Creation of Data",
		"access":6, // scale of 1 to 6, latest being the highest
		"acces-time":200 // in miliseconds
	},
	{
		"name":"Reading of Data",
		"access":6, // scale of 1 to 6, latest being the highest
		"acces-time":200 // in miliseconds
	},
	{
		"name":"Update process of Data",
		"access":3, // scale of 1 to 6, latest being the highest (0 is special conditions)
		"acces-time":200 // in miliseconds
	},
	{
		"name":"Removal of Data",
		"access":0, // scale of 1 to 6, latest being the highest
		"acces-time":200 // in miliseconds
	},
	{
		"name":"Ownership of Misma",
		"access":6, // scale of 1 to 6, latest being the highest
		"acces-time":3114 // in miliseconds
	}
];
