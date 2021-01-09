var debug = require('debug');
var publicApis = require('./publicApis');

function parseYyyymmddhhmmss(yyyymmddhhmmss) {
  var yyyy = parseInt(yyyymmddhhmmss.substring(0, 4), 10);
  var MM = parseInt(yyyymmddhhmmss.substring(4, 4 + 2), 10);
  var dd = parseInt(yyyymmddhhmmss.substring(6, 6 + 2), 10);
  var hh = parseInt(yyyymmddhhmmss.substring(8, 8 + 2), 10);
  var mm = parseInt(yyyymmddhhmmss.substring(10, 10 + 2), 10);
  var ss = parseInt(yyyymmddhhmmss.substring(12, 12 + 2), 10);

  MM -= 1;
  dd -= 1;
  
  return new Date(yyyy, MM, dd, hh, mm, ss, 0);
}

var proxyDebug = debug('knex-tracker:makeFunctionProxyHandler');

function makeFunctionProxyHandler(context, handler) {
  proxyDebug('creating');
  var target = () => {};

  Object.defineProperty(target, 'name', { value: context.constructor.name });
  proxyDebug('creating for target name', context.constructor.name);

  handler = handler || context._proxyHandler.bind(context);
  proxyDebug('creating with handler', handler);

  context.proxy = new Proxy(target, {
    apply: function(target, thisArgument, args) {
      proxyDebug('applying with arguments', arguments);
      var retVal = handler(...args);
      proxyDebug('applying returning', retVal);
      return retVal;
      // return handler(...args);
      // handler(...args);
      // return this;
    },
    getPrototypeOf: t => Object.getPrototypeOf(context),
    get: (target, prop) => {
      proxyDebug('getting prop', prop, 'from', target);
      if (prop === '__target__') {
        proxyDebug('found: proxy target requested, returning', context);
        return context;
      }

      if (prop in context) {
        proxyDebug('found: true');
        return context[prop];
      }

      proxyDebug('found: false (returning target/self)');
      return target;
    },
    getPrototypeOf: t => Object.getPrototypeOf(context),
  });

  return context.proxy;
}

module.exports = {
  parseYyyymmddhhmmss,
  makeFunctionProxyHandler,
  publicApis,
};
