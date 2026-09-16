// app/page.js
"use client"
import Title from '../Shared/Title';
import CircularGallery from './DepthCarousel'

const items = [
  { image: 'https://picsum.photos/id/1015/900/1200', label: 'Canyon', link: '#' },
  { image: 'https://picsum.photos/id/1018/900/1200', label: 'Ridgeline', link: '#' },
  { image: 'https://picsum.photos/id/1039/900/1200', label: 'Falls', link: '#' },
  { image: 'https://picsum.photos/id/1043/900/1200', label: 'Harbour', link: '#' },
  { image: 'https://picsum.photos/id/1044/900/1200', label: 'Skyline', link: '#' }
];

export default function NewArrivalDepthCarousel() {
  return (
 
<div className="mx-w-7xl px-4 sm:px-6 lg:px-8 pt-15">

<Title 
  title="Featured Products"
  highlightedText="Products"
  description="Discover our handpicked selection of premium products"
/>
    

  <div style={{ height: '600px', position: 'relative' }} className="bg-orange-500/8 rounded-[30px]">
  <CircularGallery
    bend={1}
    textColor="black"
    borderRadius={0.05}
    scrollEase={0.05}

    font="bold 30px Orbitron"
    scrollSpeed={2}
/>
</div>
</div>
  );
}