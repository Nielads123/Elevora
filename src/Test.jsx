// import { useEffect, useRef } from "react";
// import fence from "./assets/fence.png";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function Test() {
//   const imgRef = useRef(null);

//   useEffect(() => {
//     const el = imgRef.current;

//     gsap.fromTo(
//       el,
//       {
//         scale: 0,
//         rotateX: 0,
//         opacity: 0,
//         transformOrigin: "center center",
//       },
//       {
//         scale: 1.2,
//         rotateX: 1440, // 4 full spins
//         opacity: 1,
//         duration: 5,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: el,          // watch the image itself
//           start: "top 80%",     // fire when it enters viewport
//           toggleActions: "restart none none restart", 
//           // replay every time you scroll in
//         },
//       }
//     );
//   }, []);

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100 perspective-[1200px]">
//       <img
//         ref={imgRef}
//         src={fence}
//         alt="flipping"
//         className="w-[250px] h-[250px] object-contain"
//       />
//     </div>
//   );
// }
