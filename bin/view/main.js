

//ブラウザがCGIを表示したら実行
window.onload = function () {
    lastArticles(10);
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
    var url = "/last_articles.cgi?num=" + num;
    httpReq.open("GET",url,true);
    //送信する
    httpReq.send(null);
}


