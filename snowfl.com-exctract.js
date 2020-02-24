var a,b,c, len;

a = document.getElementsByClassName("torrent");
len = a.length;

for (var i = 0; i <= len - 1; i++) {
    b = a[i].getAttribute('href');
    c = b.replace("#", "");
    console.log(b);
}
