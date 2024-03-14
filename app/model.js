// for the MVC setup that i am running within the site
var model = (function () {
  var _placeholder = function (pageID) {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      $("#app").html(data);
    });
  };
  return {
    placeholder: _placeholder,
  };
})();
