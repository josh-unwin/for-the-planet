/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// At time of comment, this file is only handling the config setup of the Firebase connection.

// const React = require("react");
// // Your web app's Firebase configuration

// exports.onRenderBody = ({ setPostBodyComponents }) => {
//   var firebaseConfig = {
//     apiKey: "AIzaSyBiGU-VXDB1Ok18Ih8K-S7uh-gA-igGGnA",
//     authDomain: "for-the-planet.firebaseapp.com",
//     databaseURL: "https://for-the-planet.firebaseio.com",
//     projectId: "for-the-planet",
//     storageBucket: "for-the-planet.appspot.com",
//     messagingSenderId: "6779861735",
//     appId: "1:6779861735:web:9db3496ab8afb5acd50042",
//     measurementId: "G-2GMB77TTT8"
//   };

//   var firebaseSettings = { timestampsInSnapshots: true };

//   setPostBodyComponents([
//       // <!-- The core Firebase JS SDK is always required and must be listed first -->
//     <script src="https://www.gstatic.com/firebasejs/7.6.2/firebase-app.js" />,

//     // <!-- TODO: Add SDKs for Firebase products that you want to use
//     <script src="https://www.gstatic.com/firebasejs/7.6.2/firebase-analytics.js"/>,

//     <script>
//       // Initialize Firebase
//       firebase.initializeApp(firebaseConfig);
//       firebase.analytics();
//       var db = firebase.firestore();
//       db.settings(firebaseSettings)
//     </script>,
//     ]);
// }
