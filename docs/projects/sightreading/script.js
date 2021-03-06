window.AudioContext = window.AudioContext || window.webkitAudioContext;

var context;
function play() {
    context = new AudioContext();

    var arr = [], volume = 0.2, seconds = 0.5, tone = 441;

    for (var i = 0; i < context.sampleRate * seconds; i++) {
        arr[i] = sineWaveAt(i, tone) * volume;
    }

    playSound(arr);
}

function playSound(arr) {
    var buf = new Float32Array(arr.length);
    for (var i = 0; i < arr.length; i++) buf[i] = arr[i];
    var buffer = context.createBuffer(1, buf.length, context.sampleRate);
    buffer.copyToChannel(buf, 0);
    var source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start(0);
}

function sineWaveAt(sampleNumber, tone) {
    var sampleFreq = context.sampleRate / tone;
    return Math.sin(sampleNumber / (sampleFreq / (Math.PI*2)));
}

