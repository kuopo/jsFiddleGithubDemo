var MSGHUB_PUBSUB_URL = 'https://pubsub.msghub.io';

$(document).ready(function() {
var msghub = new MsgHub(MSGHUB_PUBSUB_URL);

msghub.subscribe('success', function (channel, data) {
    console.log(channel);
    console.log(data);
});
});

window.addEvent('domready', function() {
    new Request.HTML({
        url: '/gh/get/response.html/zalun/jsFiddleGithubDemo/tree/master/Demo/',
        data: {'delay': 1},
        method: 'post',
        update: 'demo',
        onSuccess: function(response) {
            $('demo').highlight();
        }
    }).send();
})
