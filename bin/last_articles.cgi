#!/bin/bash
source "$(dirname $0)/conf"
exec 2> "$logdir/$(basename $0).$(date +%Y%m%d_%H%M%S).$$"

#GETで受け取った文字列を処理(数字以外の全文字を消去)してnumに代入
num=$(tr -dc '0-9' <<< ${QUERY_STRING})
#文字列が空だとnumに10をセットする
[ -z "$num" ] && num=10


echo -e "Content-Type: text/html\n\n<h1>Recent posts</h1>"
tac "$datadir/post_list"		|
head -n "$num"				|
awk '{print $3}'                        |
xargs -I@ cat "$datadir/@/link_date"    |
sed 's;$;<br />;'

