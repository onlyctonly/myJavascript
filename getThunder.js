var links = document.getElementsByTagName("a");

for(var i=0; i< links.length; i++) {
    try {
        var downloadLink = links[i].getAttribute('thunderrestitle');
        if (downloadLink.slice(0,3) === "ftp"){
        console.log(downloadLink);
        }
    } catch(error) {
        
    }
}

