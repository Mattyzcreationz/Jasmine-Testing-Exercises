const { updateServerTable } = require('./server');

describe('Server Tests', function() {
  describe('updateServerTable', function() {
    it('should update the server table with server names and earnings', function() {
      allServers = {
        server1: { serverName: 'Alice', earnings: 20.50 },
        server2: { serverName: 'Bob', earnings: 30.75 },
      };
      updateServerTable();
      expect(serverTbody.children.length).toEqual(2);
      expect(serverTbody.children[0].children[0].textContent).toEqual('Alice');
      expect(serverTbody.children[1].children[0].textContent).toEqual('Bob'); 
      expect(serverTbody.children[0].children[1].textContent).toEqual('$20.50'); 
      expect(serverTbody.children[1].children[1].textContent).toEqual('$30.75'); 
    });
  });
});
