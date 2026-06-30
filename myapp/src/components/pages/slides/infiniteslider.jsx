// import React from "react";
// import "./slides.css";
// const profiles = [
//   { image: "/photos/img1.jpeg"},
//     { image: "/photos/img2.jpeg",   },
    
//     { image: "/photos/img4.jpeg",  },
//     { image: "/photos/img5.jpeg",   },
// { image: "/photos/img6.jpeg",   },
// { image: "/photos/img7.jpeg",  },
// { image: "/photos/img8.jpeg",   },
// { image: "/photos/img9.jpeg",  },
// { image: "/photos/img10.jpeg",  },
// { image: "/photos/img11.jpeg", },
// { image: "/photos/img12.jpeg",  },
// { image: "/photos/img13.jpeg",   },
// { image: "/photos/img14.jpeg", },
// { image: "/photos/img15.jpeg",  },


// ];

// // const profiles = [
// //   {
// //     id: 1,
// //     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
// //     name: "Priya",
// //   },
// //   {
// //     id: 2,
// //     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
// //     name: "Rahul",
// //   },
// //   {
// //     id: 3,
// //     image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
// //     name: "Anjali",
// //   },
// //   {
// //     id: 4,
// //     image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
// //     name: "Arjun",
// //   },
// //   {
// //     id: 5,
// //     image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
// //     name: "Sneha",
// //   },
// // ];

// export default function InfiniteSlider() {
//   return (
//     <div className="slider">
//       <div className="slide-track">
//         {[...profiles, ...profiles].map((profile, index) => (
//           <div className="card" key={index}>
//             <img src={profile.image} alt={profile.name} />
//             <h4>{profile.name}</h4>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



import { useEffect, useRef } from "react";

// Row 1 images - varied widths like the screenshot
const row1 = [
{src:"photos/img1.jpeg", w: 240},
{src:"photos/img2.jpeg", w: 220},

{src:"photos/img4.jpeg", w: 200},
{src:"photos/img5.jpeg", w: 230},
{src:"photos/img6.jpeg", w: 210},
{src:"photos/img7.jpeg", w: 250},]

// Row 2 images - different set, different widths
const row2 = [
  {src:"photos/img8.jpeg", w: 220},
  {src:"photos/img9.jpeg", w: 240},
  {src:"photos/img10.jpeg", w: 260},
  {src:"photos/img11.jpeg", w: 200},
  {src:"photos/img12.jpeg", w: 230},
  {src:"photos/img13.jpeg", w: 210},
  {src:"photos/img14.jpeg", w: 250},
];

const GAP = 12;
const ROW_HEIGHT = 280;

function getTotalWidth(items) {
  return items.reduce((sum, item) => sum + item.w + GAP, 0);
}

function InfiniteRow({ items, speed = 40, reverse = false }) {
  const trackRef = useRef(null);
  const totalW = getTotalWidth(items);
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let pos = reverse ? -totalW : 0;
    let raf;

    const step = () => {
      if (reverse) {
        pos += speed / 60;
        if (pos >= 0) pos = -totalW;
      } else {
        pos -= speed / 60;
        if (pos <= -totalW) pos = 0;
      }
      track.style.transform = `translateX(${pos}px)`;
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [totalW, speed, reverse]);

  return (
    <div style={{ overflow: "hidden", width: "100%", position: "relative" }}>
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: GAP,
          width: "max-content",
          willChange: "transform",
        }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: item.w,
              height: ROW_HEIGHT,
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 4px 18px rgba(0,0,0,0.13)",
            }}
          >
            <img
              src={item.src}
              alt=""
              draggable={false}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function InfiniteSlider() {
  return (
    <div style={styles.page}>
      <InfiniteRow items={row1} speed={35} reverse={false} />
      <div style={{ height: GAP }} />
      <InfiniteRow items={row2} speed={30} reverse={true} />
    </div>
  );
}

const styles = {
  page: {
    background: "#fff",
    padding: "16px 0",
    overflow: "hidden",
    width: "100%",
  },
};