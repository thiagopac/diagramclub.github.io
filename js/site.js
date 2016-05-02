$(function(){

    var url = window.location.pathname,
        urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"); // create regexp to match current url pathname and remove trailing slash if present as it could collide with the link in navigation in case trailing slash wasn't present there
        // now grab every link from the navigation
        $('.menu a').each(function(){
            // and test its normalized href against the url pathname regexp

            if(this.href.replace(/\/$/,'') == "http://diagramclub.github.io/" || this.href.replace(/\/$/,'') == "http://diagramclub.github.io"){
                $(this.parentNode).addClass('active');
                return;
            }

            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                $(this.parentNode).addClass('active');
            }
        });
});
