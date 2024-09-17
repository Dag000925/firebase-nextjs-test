"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID!,
};

let analyticsInitialized = false;

const FirebaseAnalytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    
    if (!analyticsInitialized) {
      const app = initializeApp(firebaseConfig);
      getAnalytics(app);
      analyticsInitialized = true;
    }

    const analytics = getAnalytics();

    // Log page view event
    logEvent(analytics, "page_view", { page_path: pathname });
    logEvent(analytics, 'test_event', { test_param: 'test_value' });

  }, [pathname]);

  return null;
};

export default FirebaseAnalytics;
