'use strict'

import PouchDB from 'pouchdb-core'
import AsyncStoragePouch from '@jurassix/pouchdb-adapter-asyncstorage'
import HttpPouch from '@jurassix/pouchdb-adapter-http-react-native'
import mapreduce from 'pouchdb-mapreduce'
import replication from 'pouchdb-replication'

PouchDB
  .plugin(AsyncStoragePouch)
  .plugin(HttpPouch)
  .plugin(mapreduce)
  .plugin(replication)

export default PouchDB
