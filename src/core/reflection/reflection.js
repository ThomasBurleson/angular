'use strict';"use strict";
var reflector_1 = require('./reflector');
var reflector_2 = require('./reflector');
exports.Reflector = reflector_2.Reflector;
exports.ReflectionInfo = reflector_2.ReflectionInfo;
var reflection_capabilities_1 = require('./reflection_capabilities');
/**
 * The {@link Reflector} used internally in Angular to access metadata
 * about symbols.
 */
exports.reflector = new reflector_1.Reflector(new reflection_capabilities_1.ReflectionCapabilities());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVmbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtdE1XZ1NRRnUudG1wL2FuZ3VsYXIyL3NyYy9jb3JlL3JlZmxlY3Rpb24vcmVmbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsMEJBQXdCLGFBQWEsQ0FBQyxDQUFBO0FBQ3RDLDBCQUF3QyxhQUFhLENBQUM7QUFBOUMsMENBQVM7QUFBRSxvREFBbUM7QUFDdEQsd0NBQXFDLDJCQUEyQixDQUFDLENBQUE7QUFFakU7OztHQUdHO0FBQ1EsaUJBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsSUFBSSxnREFBc0IsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1R5cGUsIGlzUHJlc2VudH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7TGlzdFdyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvY29sbGVjdGlvbic7XG5pbXBvcnQge1JlZmxlY3Rvcn0gZnJvbSAnLi9yZWZsZWN0b3InO1xuZXhwb3J0IHtSZWZsZWN0b3IsIFJlZmxlY3Rpb25JbmZvfSBmcm9tICcuL3JlZmxlY3Rvcic7XG5pbXBvcnQge1JlZmxlY3Rpb25DYXBhYmlsaXRpZXN9IGZyb20gJy4vcmVmbGVjdGlvbl9jYXBhYmlsaXRpZXMnO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgUmVmbGVjdG9yfSB1c2VkIGludGVybmFsbHkgaW4gQW5ndWxhciB0byBhY2Nlc3MgbWV0YWRhdGFcbiAqIGFib3V0IHN5bWJvbHMuXG4gKi9cbmV4cG9ydCB2YXIgcmVmbGVjdG9yID0gbmV3IFJlZmxlY3RvcihuZXcgUmVmbGVjdGlvbkNhcGFiaWxpdGllcygpKTtcbiJdfQ==