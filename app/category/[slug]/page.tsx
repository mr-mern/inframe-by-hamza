import Image from "next/image";
import Link from "next/link";

// All categories data
const categories: Record<
  string,
  {
    title: string;
    description: string;
    hero: string;
    gallery: { image: string; couple: string; slug: string }[];
  }
> = {
  wedding: {
    title: "Wedding",
    description:
      "Capturing the timeless moments of love, joy, and celebrations on your big day.",
    hero: "/images/categories/wedding/wedding-1.jpg",
    gallery: [
      { image: "/images/categories/wedding/wedding-1.jpg", couple: "Ali & Ayesha", slug: "ali-ayesha" },
      { image: "/images/categories/wedding/wedding-2.jpg", couple: "Hassan & Sara", slug: "hassan-sara" },
      { image: "/images/categories/wedding/wedding-3.jpg", couple: "Usman & Noor", slug: "usman-noor" },
      { image: "/images/categories/wedding/wedding-4.jpg", couple: "Bilal & Maryam", slug: "bilal-maryam" },
    ],
  },
  family: {
    title: "Family",
    description:
      "Beautiful portraits that celebrate the bond and togetherness of families.",
    hero: "/images/categories/family/family-1.jpg",
    gallery: [
      { image: "/images/categories/family/family-1.jpg", couple: "The Khan Family", slug: "khan-family" },
      { image: "/images/categories/family/family-2.jpg", couple: "The Malik Family", slug: "malik-family" },
      { image: "/images/categories/family/family-3.jpg", couple: "The Ahmed Family", slug: "ahmed-family" },
    ],
  },
  portraits: {
    title: "Portraits",
    description:
      "Expressive and artistic portraits that capture personality and style.",
    hero: "/images/categories/portraits/portraits-1.jpg",
    gallery: [
      { image: "/images/categories/portraits/portraits-1.jpg", couple: "Ayesha Khan", slug: "ayesha-khan" },
      { image: "/images/categories/portraits/portraits-2.jpg", couple: "Hamza Ali", slug: "hamza-ali" },
      { image: "/images/categories/portraits/portraits-3.jpg", couple: "Sana Javed", slug: "sana-javed" },
    ],
  },
  travel: {
    title: "Travel",
    description:
      "Adventurous journeys and breathtaking landscapes captured with passion.",
    hero: "/images/categories/travel/travel-1.jpg",
    gallery: [
      { image: "/images/categories/travel/travel-1.jpg", couple: "Hunza Valley", slug: "hunza-valley" },
      { image: "/images/categories/travel/travel-2.jpg", couple: "Skardu Adventure", slug: "skardu-adventure" },
      { image: "/images/categories/travel/travel-3.jpg", couple: "Murree Hills", slug: "murree-hills" },
    ],
  },
};

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories[params.slug];

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-semibold text-[#172b1b]">
        Category Not Found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#e9e3db]">
      {/* Hero */}
      <div className="relative w-full h-[300px] md:h-[450px]">
        <Image
          src={category.hero}
          alt={category.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-[Great_Vibes] text-[#e9e3db] tracking-wider">
            {category.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-5xl text-center">
        <p className="text-lg md:text-xl text-[#172b1b] mb-8 font-[Lora]">
          {category.description}
        </p>

        {/* Gallery */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.gallery.map((item, i) => (
            <Link
              key={i}
              href={`/portfolios/${item.slug}`}
              className="relative w-full h-[320px] md:h-[300px] rounded overflow-hidden group shadow-lg border border-[#717552]/40"
            >
              <Image
                src={item.image}
                alt={item.couple}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500 flex items-center justify-center">
                <span className="text-[#e9e3db] text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.couple}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
