function updateServerTable() {
  serverTbody.innerHTML = '';

  for (let key in allServers) {
    let curServer = allServers[key];

    let newTr = document.createElement('tr');
    newTr.setAttribute('id', key);
    
    appendTd(newTr, curServer.serverName);
    appendTd(newTr, '$' + curServer.earnings.toFixed(2));

    serverTbody.append(newTr);
  }
}

module.exports = { updateServerTable };
