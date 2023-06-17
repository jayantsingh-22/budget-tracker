/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBn7DfrZZ_kvIyMFPWrBNF3x8gw_dYrbD4",
  authDomain: "expense-tracker-aa204.firebaseapp.com",
  projectId: "expense-tracker-aa204",
  storageBucket: "expense-tracker-aa204.appspot.com",
  messagingSenderId: "1094531428888",
  appId: "1:1094531428888:web:6b6c14dd848686242e496d",
  measurementId: "G-JC2K8Y7GXB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
