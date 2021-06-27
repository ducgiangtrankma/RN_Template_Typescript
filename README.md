- init: react-native init MyApp --template react-native-template-typescript
- init: react-native-vector-icons
- init: @types/react-native-vector-icons
- init: react-native-device-info
- setup import patch : babel-plugin-module-resolver, edit file : tsconfig.json, add file babelrc end config
- setup redux-saga: 
    + init : reduxjs/toolkit
    + init : react-redux
    + init : redux-persist
    + init : redux-saga
    + init : redux-toolkit-saga
    + init : react-native-async-storage/async-storage