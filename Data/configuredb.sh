#!/bin/bash
# DATABASE_URL=$(heroku config:get DATABASE_URL -a your-app) your_process

database="linksdb"

echo "config $database"

# dropdb -U node_user linksdb
# createdb -U node_user linksdb

psql -U fznbpektgxctkc du09uufkkjqds < ./Data/links.sql

echo "$database configured"