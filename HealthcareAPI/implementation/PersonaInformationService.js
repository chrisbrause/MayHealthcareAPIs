'use strict';
var fs = require("fs");
/*
* This file will not be changed by the generator
*/
var samplePath = '/sampleData/v1/PersonaInformation.json';
var bodyParam = 'personaInformations/v1'; 
     


exports.getPersonaInformation = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var PersonaInformationFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var PersonaInformationData = [];
    if(PersonaInformationFD) {
        PersonaInformationData = JSON.parse(PersonaInformationFD);
    }
    cb(null, PersonaInformationData);
}
exports.getPersonaInformationById = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var age = args.age ? args.age.value: null;
    var PersonaInformationFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var PersonaInformationData = [];
    if(PersonaInformationFD) {
        PersonaInformationData = JSON.parse(PersonaInformationFD);
    }
    var myRecord;
    for(var i=0;i<PersonaInformationData.length;i++) {
        if(PersonaInformationData[i]['age'] == age) {
             myRecord = PersonaInformationData[i];
             break;
        }
    }
    cb(null, myRecord);
}





exports.putPersonaInformation = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var age = args.age ? args.age.value: null;
   var body = args[bodyParam].value;
   var PersonaInformationFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var PersonaInformationData = [];
   if(PersonaInformationFD) {
       PersonaInformationData = JSON.parse(PersonaInformationFD);
   }
   var myRecord;
   for(var i=0;i<PersonaInformationData.length;i++) {
       if(PersonaInformationData[i]['age'] == age) {
            PersonaInformationData[i] = Object.assign(PersonaInformationData[i],body);
            myRecord = PersonaInformationData[i];
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(PersonaInformationData));
   cb(null, myRecord);
}


exports.postPersonaInformation = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var body = args[bodyParam].value;
    var PersonaInformationFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var PersonaInformationData = [];
    if(PersonaInformationFD) {
        PersonaInformationData = JSON.parse(PersonaInformationFD);
    }
    PersonaInformationData.push(body);

    fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(PersonaInformationData));
    cb(null, body);
}


exports.patchPersonaInformation = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var age = args.age ? args.age.value: null;
   var body = args[bodyParam].value;
   var PersonaInformationFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var PersonaInformationData = [];
   if(PersonaInformationFD) {
       PersonaInformationData = JSON.parse(PersonaInformationFD);
   }
   var myRecord;
   for(var i=0;i<PersonaInformationData.length;i++) {
       if(PersonaInformationData[i]['age'] == age) {
            PersonaInformationData[i] = Object.assign(PersonaInformationData[i],body);
            myRecord = PersonaInformationData[i];
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(PersonaInformationData));
   cb(null, myRecord);
}



exports.deletePersonaInformation = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var age = args.age ? args.age.value: null;
   //var body = args[bodyParam].value;
   var PersonaInformationFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var PersonaInformationData = [];
   if(PersonaInformationFD) {
       PersonaInformationData = JSON.parse(PersonaInformationFD);
   }
   var found = false;
   for(var i=0;i<PersonaInformationData.length;i++) {
       if(PersonaInformationData[i]['age'] == age) {
            PersonaInformationData.splice(i,1);
            found = true;
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(PersonaInformationData));
   if(found) {
    cb(null, true);
   }
   else {
    cb(null, false);
   }
}


