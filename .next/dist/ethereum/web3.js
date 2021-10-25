"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0; /* import Web3 from "web3";
                   
                   window.ethereum.request({ method: "eth_requestAccounts" });
                   
                   const web3 = new Web3(window.ethereum);
                   
                   export default web3;
                   //rinkeby.infura.io/v3/0722d549fd8b44a381e1dbc4485fefbf */

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new _web2.default(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  var provider = new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/v3/0722d549fd8b44a381e1dbc4485fefbf");
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQVNBLEFBQU87Ozs7OztBQUVQLElBQUksWUFBSixHQVhBOzs7Ozs7Ozs7QUFhQSxJQUFJLE9BQUEsQUFBTyxXQUFQLEFBQWtCLGVBQWUsT0FBTyxPQUFQLEFBQWMsYUFBbkQsQUFBZ0UsYUFBYSxBQUMzRTtBQUNBO1NBQUEsQUFBTyxTQUFQLEFBQWdCLFFBQVEsRUFBRSxRQUExQixBQUF3QixBQUFVLEFBQ2xDO1NBQU8sQUFBSSxrQkFBSyxPQUFoQixBQUFPLEFBQWdCLEFBQ3hCO0FBSkQsT0FJTyxBQUNMO0FBQ0E7TUFBTSxXQUFXLElBQUksY0FBQSxBQUFLLFVBQVQsQUFBbUIsYUFBcEMsQUFBaUIsQUFDZixBQUVGO1NBQU8sQUFBSSxrQkFBWCxBQUFPLEFBQVMsQUFDakI7QUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0FkYW0gQmFicy9EZXNrdG9wL2Jsb2NrY2hhaW4va2lja3N0YXJ0In0=