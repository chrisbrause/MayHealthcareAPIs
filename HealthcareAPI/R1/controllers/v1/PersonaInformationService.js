'use strict';
  var PersonaInformationFD = require('../../sampleData/v1/PersonaInformation.json');
  var PersonaInformationData = PersonaInformationFD;




exports.getPersonaInformation = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(PersonaInformationData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                              res.end(JSON.stringify(PersonaInformationData));
                } else {
      res.end();
  }
}





exports.putPersonaInformation = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(PersonaInformationData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(PersonaInformationData[Object.keys(PersonaInformationData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postPersonaInformation = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(PersonaInformationData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(PersonaInformationData[Object.keys(PersonaInformationData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.patchPersonaInformation = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(PersonaInformationData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(PersonaInformationData[Object.keys(PersonaInformationData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



exports.deletePersonaInformation = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(PersonaInformationData).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(PersonaInformationData[Object.keys(PersonaInformationData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


