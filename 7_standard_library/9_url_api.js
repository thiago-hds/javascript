// URL Api
let url = new URL('https://example.com:8000/path/name?q=term#fragment');
url.href; // => "https://example.com:8000/path/name?q=term#fragment"
url.origin; // => "https://example.com:8000"
url.protocol; // => "https:"
url.host; // => "example.com:8000"
url.hostname; // => "example.com"
url.port; // => "8000"
url.pathname; // => "/path/name"
url.search; // => "?q=term"
url.hash; // => "#fragment"
console.log(url.href);
