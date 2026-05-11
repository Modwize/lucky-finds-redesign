export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  retailPrice?: number;
  condition: "New with Tags" | "Excellent" | "Very Good" | "Good";
  conditionScore: number;
  image: string;
  imageAlt: string;
  hoverImage?: string;
  isNew?: boolean;
  isOneOfOne?: boolean;
  authenticated?: boolean;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "chanel-classic-flap-medium",
    name: "Classic Flap Medium in Caviar",
    brand: "Chanel",
    category: "Handbags",
    price: 5800,
    retailPrice: 10800,
    condition: "Excellent",
    conditionScore: 9,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Black quilted leather handbag with gold chain",
    isNew: true,
    isOneOfOne: true,
    authenticated: true,
  },
  {
    id: "2",
    slug: "louis-vuitton-neverfull-mm",
    name: "Neverfull MM Damier Ebene",
    brand: "Louis Vuitton",
    category: "Handbags",
    price: 1450,
    retailPrice: 2030,
    condition: "Very Good",
    conditionScore: 8,
    image:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Brown checkered monogram tote bag",
    isOneOfOne: true,
    authenticated: true,
  },
  {
    id: "3",
    slug: "louboutin-so-kate-pumps",
    name: "So Kate 120 Patent Pumps",
    brand: "Christian Louboutin",
    category: "Shoes",
    price: 495,
    retailPrice: 795,
    condition: "Excellent",
    conditionScore: 9,
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Black patent leather stiletto pumps",
    isNew: true,
    isOneOfOne: true,
    authenticated: true,
  },
  {
    id: "4",
    slug: "hermes-twilly-silk-scarf",
    name: "Twilly Silk Twill Scarf",
    brand: "Hermès",
    category: "Accessories",
    price: 165,
    retailPrice: 215,
    condition: "New with Tags",
    conditionScore: 10,
    image:
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Folded silk scarf in orange tones",
    isNew: true,
    authenticated: true,
  },
  {
    id: "5",
    slug: "gucci-marmont-shoulder-bag",
    name: "GG Marmont Matelassé Shoulder",
    brand: "Gucci",
    category: "Handbags",
    price: 1180,
    retailPrice: 2380,
    condition: "Very Good",
    conditionScore: 8,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Quilted leather shoulder bag",
    isOneOfOne: true,
    authenticated: true,
  },
  {
    id: "6",
    slug: "prada-saffiano-galleria",
    name: "Galleria Saffiano Medium",
    brand: "Prada",
    category: "Handbags",
    price: 1640,
    retailPrice: 3300,
    condition: "Excellent",
    conditionScore: 9,
    image:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Structured leather handbag",
    isNew: true,
    isOneOfOne: true,
    authenticated: true,
  },
  {
    id: "7",
    slug: "tory-burch-leather-jacket",
    name: "Cropped Leather Moto Jacket",
    brand: "Tory Burch",
    category: "Apparel",
    price: 385,
    retailPrice: 998,
    condition: "Excellent",
    conditionScore: 9,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Black leather moto jacket",
    authenticated: true,
  },
  {
    id: "8",
    slug: "kate-spade-pearl-earrings",
    name: "Pearl Cluster Drop Earrings",
    brand: "Kate Spade",
    category: "Jewelry",
    price: 78,
    retailPrice: 148,
    condition: "New with Tags",
    conditionScore: 10,
    image:
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Pearl drop earrings",
    isNew: true,
    authenticated: true,
  },
];

export const featuredBrands = [
  "Chanel",
  "Louis Vuitton",
  "Hermès",
  "Christian Louboutin",
  "Gucci",
  "Prada",
  "Bottega Veneta",
  "Saint Laurent",
  "Tory Burch",
  "Kate Spade",
  "Burberry",
  "Fendi",
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
