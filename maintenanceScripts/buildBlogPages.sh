FILES=$(ls ../blogPages)
rm ../pages.html
i=1
for f in $FILES
do
    metadata=$(cat $f| htmlq "h1, h3"  --text)
    echo "<h3><a class='purple' href='blogPages/post${i}.html'>$(echo "$metadata" | awk 'NR==1{print}')</a></h2>
<p>$(echo "$metadata" | awk 'NR==2{print}')</p>" >> ../pages.html
    ((i=i+1))
done

