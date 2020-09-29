function myFunction() {
  var x = document.getElementById("nome").value;
    
  document.getElementById("demo").innerHTML = x;
}

var GoogleAuth; // Google Auth object.
function initClient() {
  gapi.client.init({
      'apiKey': 'qrNy39Bq2ECvxW6SZrxiNP9u',
      'clientId': '398768273317-vpbhas2fsubspm9s6f2gt3i5e01ef970.apps.googleusercontent.com',
      'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
  }).then(function () {
      GoogleAuth = gapi.auth2.getAuthInstance();

      // Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);
  });
}