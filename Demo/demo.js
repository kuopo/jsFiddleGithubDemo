var MSGHUB_PUBSUB_URL = 'https://pubsub.msghub.io';

var msghub = new MsgHub(MSGHUB_PUBSUB_URL);

msghub.subscribe('success', function (channel, data) {
    console.log(channel);
    console.log(data);
});
