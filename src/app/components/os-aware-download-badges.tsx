// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { AppleStoreBadge, GooglePlayBadge } from "./exact-badges";
// import { useIsMobile } from "@/hooks/use-mobile";
// import { gaEvent } from "@/lib/ga";

// type OS = "ios" | "android" | "unknown";

// function getMobileOS(): OS {
//   if (typeof window === "undefined") return "unknown";
//   const ua = navigator.userAgent || navigator.vendor || (window as any).opera;

//   if (/android/i.test(ua)) return "android";
//   if (/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream) return "ios";
//   return "unknown";
// }

// export function OSAwareDownloadBadges({
//   iosHref = "#",
//   androidHref = "#",
// }: {
//   iosHref?: string;
//   androidHref?: string;
// }) {
//   const isMobile = useIsMobile();
//   const [os, setOs] = useState<OS>("unknown");

//   useEffect(() => {
//     setOs(getMobileOS());
//   }, []);

//   const trackClick = (platform: "ios" | "android", label: string) => {
//     gaEvent("download_cta_click", {
//       platform,
//       label,
//       location: "hero",
//     });
//   };

//   if (isMobile && os === "ios") {
//     return (
//       <div className="flex flex-col items-center gap-3">
//         <AppleStoreBadge
//           href={iosHref}
//           onClick={() => trackClick("ios", "app_store")}
//         />
//         <motion.p
//           className="text-sm text-muted-foreground"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         >
//           <strong>Now available on the App Store</strong>
//         </motion.p>
//         <Link
//           href={androidHref}
//           onClick={() => trackClick("android", "play_store")}
//           className="text-xs text-muted-foreground hover:text-primary transition-colors"
//         >
//           Also available on Google Play
//         </Link>
//       </div>
//     );
//   }

//   if (isMobile && os === "android") {
//     return (
//       <div className="flex flex-col items-center gap-3">
//         <GooglePlayBadge
//           href={androidHref}
//           onClick={() => trackClick("android", "play_store")}
//         />
//         <motion.p
//           className="text-sm text-muted-foreground"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         >
//           <strong>Now available on Google Play</strong>
//         </motion.p>
//         <Link
//           href={iosHref}
//           onClick={() => trackClick("ios", "app_store")}
//           className="text-xs text-muted-foreground hover:text-primary transition-colors"
//         >
//           Also available on the App Store
//         </Link>
//       </div>
//     );
//   }

//   // Desktop or unknown OS
//   return (
//     <div className="flex flex-col items-center gap-4">
//       <div className="flex flex-row gap-4">
//         <AppleStoreBadge
//           href={iosHref}
//           onClick={() => trackClick("ios", "app_store")}
//         />
//         <GooglePlayBadge
//           href={androidHref}
//           onClick={() => trackClick("android", "play_store")}
//         />
//       </div>
//       <motion.p
//         className="text-sm text-muted-foreground"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.4 }}
//       >
//         <strong>Download for iOS and Android</strong>
//       </motion.p>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AppleStoreBadge, GooglePlayBadge } from "./exact-badges";
import { useIsMobile } from "@/hooks/use-mobile";
import { gaEvent } from "@/lib/ga";

type OS = "ios" | "android" | "unknown";

function getMobileOS(): OS {
  if (typeof window === "undefined") return "unknown";
  const ua = navigator.userAgent || navigator.vendor;
  if (/android/i.test(ua)) return "android";
  if (/iPad|iPhone|iPod/.test(ua)) return "ios";
  return "unknown";
}

export function OSAwareDownloadBadges({
  iosHref,
  androidHref,
}: {
  iosHref: string;
  androidHref: string;
}) {
  const isMobile = useIsMobile();
  const [os, setOs] = useState<OS>("unknown");

  useEffect(() => {
    setOs(getMobileOS());
  }, []);

  function track(platform: "ios" | "android") {
    gaEvent("download_click", {
      platform,
      location: "download_section",
    });
  }

  // -------- Mobile --------
  if (isMobile) {
    if (os === "ios") {
      return (
        <div className="flex flex-col items-center gap-3">
          <AppleStoreBadge
            href={iosHref}
            onClick={() => track("ios")}
          />

          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <strong>Now available on the App Store</strong>
          </motion.p>

          <Link
            href={androidHref}
            onClick={() => track("android")}
            className="text-xs text-muted-foreground hover:text-primary"
          >
            Also available on Google Play
          </Link>
        </div>
      );
    }

    if (os === "android") {
      return (
        <div className="flex flex-col items-center gap-3">
          <GooglePlayBadge
            href={androidHref}
            onClick={() => track("android")}
          />

          <motion.p
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <strong>Now available on Google Play</strong>
          </motion.p>

          <Link
            href={iosHref}
            onClick={() => track("ios")}
            className="text-xs text-muted-foreground hover:text-primary"
          >
            Also available on the App Store
          </Link>
        </div>
      );
    }
  }

  // -------- Desktop --------
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <AppleStoreBadge
          href={iosHref}
          onClick={() => track("ios")}
        />
        <GooglePlayBadge
          href={androidHref}
          onClick={() => track("android")}
        />
      </div>

      <motion.p
        className="text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <strong>Download for iOS and Android</strong>
      </motion.p>
    </div>
  );
}
