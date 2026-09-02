import DepthCarousel from './DepthCarousel';

const items = [
  {
    image:
      'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&h=1000&fit=crop',
    alt: 'Wireless Headphones',
    title: '🎧 Premium Wireless Headphones',
    description: 'Extra battery life with advanced noise cancellation',
  },
  {
    image:
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&h=1000&fit=crop',
    alt: 'Smart Watch',
    title: '⌚ Smart Watch Pro',
    description: 'Health monitoring and fitness tracking included',
  },
  {
    image:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=1000&fit=crop',
    alt: 'MacBook Pro',
    title: '💻 Laptop Ultrabook',
    description: 'A lightweight machine built for powerful performance',
  },
  {
    image:
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=1000&fit=crop',
    alt: 'Gaming Mouse',
    title: '🎮 Gaming Mouse',
    description: 'Ultra-fast response with dynamic RGB lighting',
  },
  {
    image:
      'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=1000&fit=crop',
    alt: 'Wireless Earbuds',
    title: '🔊 True Wireless Earbuds',
    description: 'Crystal-clear sound with water-resistant design',
  },
  {
    image:
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=1000&fit=crop',
    alt: 'Smartphone',
    title: '📱 Flagship Smartphone',
    description: 'Triple camera system with a stunning AMOLED display',
  },
];

function NewArrivalDepthCarousel() {
  return (
    <div style={{ height: '500px', position: 'relative' }}>
      <DepthCarousel
        items={items}
        depth={220}
        spread={90}
        tilt={22}
        tiltDirection="right"
        perspective={1400}
        visibleCards={4}
        falloff={0.2}
        blur={6}
        autoplay={false}
        loop
        cardWidth={300}
        cardHeight={380}
        radius={18}
        tint="#05060a"
        duration={700}
        ease="power3.out"
        autoplayDelay={3200}
        showControls
        showIndicators
      />
    </div>
  );
}

export default NewArrivalDepthCarousel;