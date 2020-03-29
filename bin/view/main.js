//ブラウザがCGIを表示したら実行
window.onload = function () {
    lastArticles(10);
    rankArticles(10);
    linkKeywords();
    fullSearch("");
}

function lastArticles(num){
    //Ajaxを司るオブジェクトを作成
    var httpReq = new XMLHttpRequest();
    httpReq.onreadystatechange = function(){
        //返答が正常でなければ何もしない
        if(httpReq.readyState != 4 || httpReq.status != 200)
            return;

        //HTMLのlast-articlesというIDを持つ要素の中(innerHTML)にresponseTextを流し込む
        document.getElementById("last-articles").innerHTML = httpReq.responseText;
    }
    //cgiを実行
    var url = "/last_articles.cgi?num=" + num;
    httpReq.open("GET",url,true);
    //送信する
    httpReq.send(null);
}


// lastArticlesほぼ同等
function linkKeywords(){
    var httpReq = new XMLHttpRequest();
    httpReq.onreadystatechange = function(){
        if(httpReq.readyState != 4 || httpReq.status != 200)
            return;

        document.getElementById("keywords").innerHTML = httpReq.responseText;
    }
    var word = document.getElementById("keywords").innerHTML;
    //cgiを実行 日本語や記号を送信するためにencodeURIComponentを使う
    var url = "/link_keywords.cgi?keywords=" + encodeURIComponent(word);
    httpReq.open("GET",url,true);
    httpReq.send(null);
}

function fullSearch(word){
    var httpReq = new XMLHttpRequest();
    httpReq.onreadystatechange = function(){
        if(httpReq.readyState != 4 || httpReq.status != 200)
            return;

        document.getElementById("full-search").innerHTML = httpReq.responseText;
        document.body.style.cursor = "default";
    }
    var url = "/full_search.cgi?word=" + encodeURIComponent(word);
    httpReq.open("GET",url,true);
    httpReq.send(null);
    document.body.style.cursor = "wait";
}

function rankArticles(num){
    var httpReq = new XMLHttpRequest();
    httpReq.onreadystatechange = function(){
        if(httpReq.readyState != 4 || httpReq.status != 200)
            return;

        document.getElementById("rank-articles").innerHTML = httpReq.responseText;
   }
    var url = "/rank_articles.cgi?num=" + num;
    httpReq.open("GET",url,true);
    httpReq.send(null);
}

