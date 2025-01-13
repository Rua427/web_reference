function createWindow () {

//
mainWindow.on("ready-to-show", function () {
    var proxyIp = " 83.97.23.90";
    var port = "18080";
if (proxyIp.trim() == "noproxy") {
      var my_proxy = "direct://";
      session
        .fromPartition("persist:webviewsession")
        .setProxy({ proxyRules: my_proxy }, function () {
          console.log("using the proxy  " + proxyIp);
        });
    } else {
      var my_proxy = "http://" + proxyIp + ":" + port;
      session
        .fromPartition("persist:webviewsession")
        .setProxy({ proxyRules: my_proxy }, function () {
          console.log("using the proxy  " + proxyIp);
        });
    }
  });

}
