export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  currency: "PKR";
  category: string;
  sizes: string[];
  images: string[];
  description: string;
}

export const products: Product[] = [
  {
    id: "vader-hoodie-nqg",
    slug: "vader-hoodie-nqg",
    name: "Vader Hoodie NQG",
    subtitle: "Heavyweight training layer",
    price: 30500,
    currency: "PKR",
    category: "Hoodies",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/delta-product.png", "/images/delta-hero.png", "/images/delta-philosophy.png"],
    description: "A structured heavyweight hoodie engineered for warm-ups, recovery, and the work between.",
  },
  {
    id: "vector-compression-tee",
    slug: "vector-compression-tee",
    name: "Vector Compression Tee",
    subtitle: "Second-skin performance fit",
    price: 14500,
    currency: "PKR",
    category: "T-Shirts",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/delta-philosophy.png", "/images/delta-product.png", "/images/delta-hero.png"],
    description: "Breathable four-way stretch compression built to move without distraction.",
  },
  {
    id: "axis-training-trouser",
    slug: "axis-training-trouser",
    name: "Axis Training Trouser",
    subtitle: "Tapered technical movement",
    price: 22500,
    currency: "PKR",
    category: "Trousers",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/delta-hero.png", "/images/delta-product.png", "/images/delta-philosophy.png"],
    description: "A disciplined tapered silhouette with enough stretch for unrestricted training.",
  },
  {
    id: "form-performance-legging",
    slug: "form-performance-legging",
    name: "Form Performance Legging",
    subtitle: "High-compression support",
    price: 18500,
    currency: "PKR",
    category: "Leggings",
    sizes: ["XS", "S", "M", "L"],
    images: ["/images/delta-philosophy.png", "/images/delta-hero.png", "/images/delta-product.png"],
    description: "High-rise technical leggings with stable compression and a clean, distraction-free finish.",
  },
  {
    id: "intent-training-tank",
    slug: "intent-training-tank",
    name: "Intent Training Tank",
    subtitle: "Lightweight training essential",
    price: 11000,
    currency: "PKR",
    category: "Tank Tops",
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/delta-hero.png", "/images/delta-philosophy.png", "/images/delta-product.png"],
    description: "A stripped-back training tank cut for airflow and complete shoulder mobility.",
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);

export const productCategories = [...new Set(products.map((product) => product.category))];
