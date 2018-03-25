var app = angular.module('StarterApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav','$http', function($scope, $mdSidenav,$http){
	alert("loaded")
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
	
  };
   $scope.fireClicked = () => {
		  var url = "https://api-sandbox.safetrek.io/v1/alarms";
		  var data = {
  "services": {
    "police": false,
    "fire": true,
    "medical": false
  },
  "location.address": {
    "line1": "10 Amhurst Avenue",
    "line2": "Unit C",
    "city": "Somerdale",
    "state": "NJ",
    "zip": "08083"
  }
};
		  var config = {'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5FWTBPVVV3TVRSRU5qUTRSVUZDTkVJd01rUTBSVEUwUVRJMFF6ZzRSVGc1T0RBMFJEWXhOUSJ9.eyJodHRwOi8vY2xpZW50LW5hbWUiOiJIQUNLX1VWQSIsImlzcyI6Imh0dHBzOi8vbG9naW4tc2FuZGJveC5zYWZldHJlay5pby8iLCJzdWIiOiJzbXN8NWFiNmNjYjFhNjgwM2E5MTkxMWU1OGMxIiwiYXVkIjpbImh0dHBzOi8vYXBpLXNhbmRib3guc2FmZXRyZWsuaW8iLCJodHRwczovL3NhZmV0cmVrLXNhbmRib3guYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTUyMTkyOTQwOCwiZXhwIjoxNTIxOTY1NDA4LCJhenAiOiJtNXFYRjV6dE9kVDRjZFF0VWJaVDJnckJoRjE4N3Z3NiIsInNjb3BlIjoib3BlbmlkIHBob25lIG9mZmxpbmVfYWNjZXNzIn0.Id_YJofNw9YCsiBMwUka7x4bmnncdwYLipbOhrlQXP0QOYmt5wWW4pj8xonsn4N2-VEgrb3Cj_16TwlixUOF-wLel_N-3N2OyLX13UDZqESu415fEMLwQfhFBJrMiLpwUM4DmV7SMpGj8PY0jeO4-T0D4fmw0ex454ie7D3OQkLedMYSyoS8caUmm_iD9ECqCXyZVCdKOTPgL1Ml0a-0eBt7IenpbyvLG1xrQsipWsqAqT-l1BrmKm71oZaszdK1qL21FmHZWJL8cD-yblnayS3_wciFzS3e7DhoGbmP5DQIVvzh2hxOtt4l6wmF8Jr1zcnXb2Fq38sKKU1na8G7BA",                       
						'Content-Type': "application/json" };
	   $http.defaults.headers.common.Authorization = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5FWTBPVVV3TVRSRU5qUTRSVUZDTkVJd01rUTBSVEUwUVRJMFF6ZzRSVGc1T0RBMFJEWXhOUSJ9.eyJodHRwOi8vY2xpZW50LW5hbWUiOiJIQUNLX1VWQSIsImlzcyI6Imh0dHBzOi8vbG9naW4tc2FuZGJveC5zYWZldHJlay5pby8iLCJzdWIiOiJzbXN8NWFiNmNjYjFhNjgwM2E5MTkxMWU1OGMxIiwiYXVkIjpbImh0dHBzOi8vYXBpLXNhbmRib3guc2FmZXRyZWsuaW8iLCJodHRwczovL3NhZmV0cmVrLXNhbmRib3guYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTUyMTkyOTQwOCwiZXhwIjoxNTIxOTY1NDA4LCJhenAiOiJtNXFYRjV6dE9kVDRjZFF0VWJaVDJnckJoRjE4N3Z3NiIsInNjb3BlIjoib3BlbmlkIHBob25lIG9mZmxpbmVfYWNjZXNzIn0.Id_YJofNw9YCsiBMwUka7x4bmnncdwYLipbOhrlQXP0QOYmt5wWW4pj8xonsn4N2-VEgrb3Cj_16TwlixUOF-wLel_N-3N2OyLX13UDZqESu415fEMLwQfhFBJrMiLpwUM4DmV7SMpGj8PY0jeO4-T0D4fmw0ex454ie7D3OQkLedMYSyoS8caUmm_iD9ECqCXyZVCdKOTPgL1Ml0a-0eBt7IenpbyvLG1xrQsipWsqAqT-l1BrmKm71oZaszdK1qL21FmHZWJL8cD-yblnayS3_wciFzS3e7DhoGbmP5DQIVvzh2hxOtt4l6wmF8Jr1zcnXb2Fq38sKKU1na8G7BA";
		  $http.post(url, data,config);
	  }


$scope.medicalClicked = () => {
		  var url = "https://api-sandbox.safetrek.io/v1/alarms";
		  var data = {
  "services": {
    "police": false,
    "fire": false,
    "medical": true
  },
  "location.address": {
    "line1": "10 Amhurst Avenue",
    "line2": "Unit C",
    "city": "Somerdale",
    "state": "NJ",
    "zip": "08083"
  }
};
		  var config = {'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5FWTBPVVV3TVRSRU5qUTRSVUZDTkVJd01rUTBSVEUwUVRJMFF6ZzRSVGc1T0RBMFJEWXhOUSJ9.eyJodHRwOi8vY2xpZW50LW5hbWUiOiJIQUNLX1VWQSIsImlzcyI6Imh0dHBzOi8vbG9naW4tc2FuZGJveC5zYWZldHJlay5pby8iLCJzdWIiOiJzbXN8NWFiNmNjYjFhNjgwM2E5MTkxMWU1OGMxIiwiYXVkIjpbImh0dHBzOi8vYXBpLXNhbmRib3guc2FmZXRyZWsuaW8iLCJodHRwczovL3NhZmV0cmVrLXNhbmRib3guYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTUyMTkyOTQwOCwiZXhwIjoxNTIxOTY1NDA4LCJhenAiOiJtNXFYRjV6dE9kVDRjZFF0VWJaVDJnckJoRjE4N3Z3NiIsInNjb3BlIjoib3BlbmlkIHBob25lIG9mZmxpbmVfYWNjZXNzIn0.Id_YJofNw9YCsiBMwUka7x4bmnncdwYLipbOhrlQXP0QOYmt5wWW4pj8xonsn4N2-VEgrb3Cj_16TwlixUOF-wLel_N-3N2OyLX13UDZqESu415fEMLwQfhFBJrMiLpwUM4DmV7SMpGj8PY0jeO4-T0D4fmw0ex454ie7D3OQkLedMYSyoS8caUmm_iD9ECqCXyZVCdKOTPgL1Ml0a-0eBt7IenpbyvLG1xrQsipWsqAqT-l1BrmKm71oZaszdK1qL21FmHZWJL8cD-yblnayS3_wciFzS3e7DhoGbmP5DQIVvzh2hxOtt4l6wmF8Jr1zcnXb2Fq38sKKU1na8G7BA",                       
						'Content-Type': "application/json" };
	   $http.defaults.headers.common.Authorization = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5FWTBPVVV3TVRSRU5qUTRSVUZDTkVJd01rUTBSVEUwUVRJMFF6ZzRSVGc1T0RBMFJEWXhOUSJ9.eyJodHRwOi8vY2xpZW50LW5hbWUiOiJIQUNLX1VWQSIsImlzcyI6Imh0dHBzOi8vbG9naW4tc2FuZGJveC5zYWZldHJlay5pby8iLCJzdWIiOiJzbXN8NWFiNmNjYjFhNjgwM2E5MTkxMWU1OGMxIiwiYXVkIjpbImh0dHBzOi8vYXBpLXNhbmRib3guc2FmZXRyZWsuaW8iLCJodHRwczovL3NhZmV0cmVrLXNhbmRib3guYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTUyMTkyOTQwOCwiZXhwIjoxNTIxOTY1NDA4LCJhenAiOiJtNXFYRjV6dE9kVDRjZFF0VWJaVDJnckJoRjE4N3Z3NiIsInNjb3BlIjoib3BlbmlkIHBob25lIG9mZmxpbmVfYWNjZXNzIn0.Id_YJofNw9YCsiBMwUka7x4bmnncdwYLipbOhrlQXP0QOYmt5wWW4pj8xonsn4N2-VEgrb3Cj_16TwlixUOF-wLel_N-3N2OyLX13UDZqESu415fEMLwQfhFBJrMiLpwUM4DmV7SMpGj8PY0jeO4-T0D4fmw0ex454ie7D3OQkLedMYSyoS8caUmm_iD9ECqCXyZVCdKOTPgL1Ml0a-0eBt7IenpbyvLG1xrQsipWsqAqT-l1BrmKm71oZaszdK1qL21FmHZWJL8cD-yblnayS3_wciFzS3e7DhoGbmP5DQIVvzh2hxOtt4l6wmF8Jr1zcnXb2Fq38sKKU1na8G7BA";
		  $http.post(url, data,config);
	  }
}]);