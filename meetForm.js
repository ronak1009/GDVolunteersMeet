function continue1(event) {

  showSection('screen2');

}

function showSection (secId){
  var screens = [];
  for (var i = 0; i < 4; i++) {
    var sectionId = 'screen' + (i + 1);
    screens[i] = document.querySelector('#' + sectionId);
    var secClass = screens[i].className;
    if(sectionId === secId){
      secClass = secClass.replace('hide', '');
    }
    else {
      secClass = secClass.indexOf('hide') > 0 ? secClass : secClass + ' hide';
    }
    screens[i].className = secClass;
  }

}

function continue2(event) {
  var agreeCond = document.querySelector('#agree-checkbox');
  if(agreeCond.checked) {
    showSection('screen3');
  }
}
function cancelAll () {
  showSection('screen1');
  var agreeCond = document.querySelector('#agree-checkbox');
  agreeCond.checked = false;

//   var vName = document.querySelector('#vName');
//   vName.value = undefined;

//   var vEmail = document.querySelector('#vEmail');
//   vEmail.value = undefined;

//   var vAddress = document.querySelector('#vAddress');
//   vAddress.value = undefined;

//   var vwhatsapp = document.querySelector('#vwhatsapp');
//   vwhatsapp.value = undefined;

//   var vEmergency = document.querySelector('#vEmergency');
//   vEmergency.value = undefined;

//   var vPhoto = document.querySelector('#vPhoto');
//   vPhoto.value = undefined;

//   var vInspiration = document.querySelector('#vInspiration');
//   vInspiration.value = undefined;

  var forms = ['vName', 'vEmail', 'vAddress', 'vwhatsapp', 'vEmergency', 'vInspiration']
  
  var skills = ['skillContent', 'skillPhoto', 'skillArt', 'skillVideo', 'skillSocial', 'skillTechnology', 'skillContent']
  
  forms.forEach(function(cid){
    var item = document.querySelector('#' + cid);
    item.value = '';
  });

  skills.forEach(function(pid){
    var item = document.querySelector('#' + pid);
    item.value = undefined;
  })

}
