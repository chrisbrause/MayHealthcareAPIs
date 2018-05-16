'use strict';

  
    var PersonaInformationImplementation = require('../../../implementation/PersonaInformationService.js');
    
var PersonaInformationData;

        


    module.exports.getPersonaInformation = function getPersonaInformation (req, res, next) {
    var args = req.swagger.params;
    PersonaInformationImplementation.getPersonaInformation(args, (error, data) => {
        PersonaInformationData = data;
        if (Object.keys(PersonaInformationData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                                                                                res.end(JSON.stringify(PersonaInformationData));
                                    } else {
            res.end();
        }
    });
};
module.exports.getPersonaInformationById = function getPersonaInformation (req, res, next) {
    var args = req.swagger.params;
    PersonaInformationImplementation.getPersonaInformationById(args, (error, data) => {
        PersonaInformationData = data;
        if (PersonaInformationData && Object.keys(PersonaInformationData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                        
            res.writeHead(200);
            res.end(JSON.stringify(PersonaInformationData));

        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
    
                
        


    
            module.exports.putPersonaInformation = function putPersonaInformation (req, res, next) {
    var args = req.swagger.params;
    PersonaInformationImplementation.putPersonaInformation(args, (error, data) => {
        PersonaInformationData = data;
        if (PersonaInformationData && Object.keys(PersonaInformationData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(PersonaInformationData || {}, null, 2));
        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
        
        


    
        module.exports.postPersonaInformation = function postPersonaInformation (req, res, next) {
    var args = req.swagger.params;
    PersonaInformationImplementation.postPersonaInformation(args, (error, data) => {
        PersonaInformationData = data;
        if (PersonaInformationData && Object.keys(PersonaInformationData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(PersonaInformationData || {}, null, 2));
        } else {
            res.writeHead(400);
            res.end();
        }
    });
};
            
        


    
    module.exports.patchPersonaInformation = function patchPersonaInformation (req, res, next) {
    var args = req.swagger.params;
    PersonaInformationImplementation.patchPersonaInformation(args, (error, data) => {
        PersonaInformationData = data;
        if (PersonaInformationData && Object.keys(PersonaInformationData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(PersonaInformationData || {}, null, 2));
        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
                
        module.exports.deletePersonaInformation = function deletePersonaInformation (req, res, next) {
    var args = req.swagger.params;
    PersonaInformationImplementation.deletePersonaInformation(args, (error, data) => {
        PersonaInformationData = data;
                if(data == true) {
            res.writeHead(204);
            res.end();
        }
        else {
            res.writeHead(404);
            res.end();
        }
    });
};
    


    
                
        
    
