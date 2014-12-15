/**
 *
 */
$('.goPage').on('click', function () {
    goPage($(this).attr('href'), $(this).data('params'));
    return false;
});

/**
 *
 * @param url
 * @param param
 */
function goPage(url, param) {
    //var p = (param != null) ? url + "?parameters=" + param : url;
    if (param != null) {
        $.mobile.changePage(url, {
            dataUrl: url,
            data: {'parameters': param},
            reloadPage: true,
            changeHash: true,
            transition:'slide',
            rel:'external'
        });

    }
    else {
        $.mobile.changePage(url, {
            dataUrl: p,
            reloadPage: true,
            changeHash: true,
            transition:'slide',
            rel:'external'
        });
    }
}

/**
 *
 * @param t
 * @returns {XML|string|void}
 */
function getObjParameters(t) {
    if(t.data("url").split("?")[1] != undefined){
        var parameters = (t.data("url").split("?")[1]).replace("parameters=", "");
        var array = parameters.split(",");
        var result = "";
        $.each(array, function (i) {
            result += quote(array[i]) + ',';
        });
        result = result.substring(0, result.length - 1);
        result = '{' + result + '}';
        parameters = $.parseJSON(result);
        return parameters;
    }
    else{
        return $.parseJSON('{}');
    }
}

/**
 *
 * @param text
 * @returns {string}
 */
function quote(text) {
    var urls = text.split(':');
    for (var i = 0; i < urls.length; i++) urls[i] = '"' + urls[i] + '"';
    return urls.join(":")
}

/**
 *
 * @returns {boolean}
 */
function goBack() {
    parent.history.back();
    return false;
}




