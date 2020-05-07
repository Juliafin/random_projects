#! /bin/bash

echo 'hello'

echo $1
FOLDER_NAME=$1

# echo $2

# if [ $1 != $2 ]; then
#   echo "The numbers are equal"
# else
#   echo "The numbers are not equal"
# fi

# if [ $1 ]; then

#   if [ -d "$FOLDER_NAME" ]; then
#     echo 'The folder already exists'
#   else
#     mkdir $FOLDER_NAME &&
#     cd $FOLDER_NAME &&
#     touch app.js &&
#     echo "console.log('hello world')" >> app.js
#     chmod chow
# fi

# else
#   echo 'no argument'
# fi


for f in $( ls -al ); do
  echo $f
done