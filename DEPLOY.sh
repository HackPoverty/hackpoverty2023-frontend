#!/bin/bash

echo "Must be in root directory of project"

# SSH Details
PRIVATE_FILE="C:\\Users\\natha\\Documents\\files--dont-move\\hackpoverty.ppk"
SSH_PORT=22
USER="hostingca"
HOST="albernihosting.ca"
DIRECTORY_TO_UNPACK="/home/$USER/public_html/ovoflow"

# Helpers
USER_AND_HOST="$USER@$HOST"

# Get tarball of build directory
TAR_FILE_NAME="ovoflow-build.tar.gz"
cd ./build
npm run build
tar -zvcf "../$TAR_FILE_NAME" ./*
cd ..

# Copy the files over to server
pscp -P $SSH_PORT -i $PRIVATE_FILE $TAR_FILE_NAME "$USER_AND_HOST:$DIRECTORY_TO_UNPACK"

plink -P 22 -i $PRIVATE_FILE $USER_AND_HOST \
  "cd '$DIRECTORY_TO_UNPACK'; tar -zxvf $TAR_FILE_NAME; rm -f $TAR_FILE_NAME" 
