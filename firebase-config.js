<!-- firebase-config.js -->
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyC2WerQR0ns5Nb884VC3hLLUjo9zmHum4I",
    authDomain: "device-id-fa609.firebaseapp.com",
    databaseURL: "https://device-id-fa609-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "device-id-fa609",
    storageBucket: "device-id-fa609.firebasestorage.app",
    messagingSenderId: "692838888581",
    appId: "1:692838888581:web:89100b9eb9b0e75fac65ec",
    measurementId: "G-20S0EJ950Z"
  };

  const app = initializeApp(firebaseConfig);
  window.auth = getAuth(app);
  window.db = getDatabase(app);
</script>
