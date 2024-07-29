
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvpYDK9S8rrxOFuuPQ15yWlG-9LRyPBns",
  authDomain: "album122-64f87.firebaseapp.com",
  projectId: "album122-64f87",
  storageBucket: "album122-64f87.appspot.com",
  messagingSenderId: "774177475852",
  appId: "1:774177475852:web:e8f3c34194743270b1cd29",
  measurementId: "G-KTE5K33Z55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.getElementById('uploadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length === 0) {
        alert('Please select a file!');
        return;
    }
    const file = fileInput.files[0];
    const storageRef = storage.ref().child('images/' + file.name);
    storageRef.put(file).then((snapshot) => {
        snapshot.ref.getDownloadURL().then((url) => {
            const img = document.createElement('img');
            img.src = url;
            document.getElementById('gallery').appendChild(img);
        });
    }).catch((error) => {
        console.error('Upload failed:', error);
    });
});
