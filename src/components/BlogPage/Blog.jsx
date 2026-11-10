import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCalendar, FiClock, FiSearch } from "react-icons/fi";
import styles from "./blog.module.css";

const blogPosts = [
  {
    id: 1,
    category: "Fashion",
    title: "How to Build a Timeless Wardrobe",
    description:
      "Discover essential fashion pieces that never go out of style and create beautiful outfits effortlessly.",
    date: "November 05, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900",
  },
  {
    id: 2,
    category: "Beauty",
    title: "Simple Beauty Tips for Everyday Glow",
    description:
      "A few simple beauty habits can make a big difference. Explore our everyday beauty tips.",
    date: "November 02, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900",
  },
  {
    id: 3,
    category: "Lifestyle",
    title: "Small Details That Make a Big Difference",
    description:
      "Learn how accessories and little styling details can transform your everyday look.",
    date: "October 28, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900",
  },
  {
    id: 4,
    category: "Fashion",
    title: "Your Guide to Choosing the Perfect Outfit",
    description:
      "Find the right outfit for every occasion with these simple styling ideas.",
    date: "October 22, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900",
  },
  {
    id: 5,
    category: "Beauty",
    title: "Everyday Essentials You Should Have",
    description:
      "Explore the essential products that make your daily routine easier and more enjoyable.",
    date: "October 18, 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=900",
  },
  {
    id: 6,
    category: "Lifestyle",
    title: "Refresh Your Style This Season",
    description:
      "Get inspired to refresh your personal style with new combinations and fresh ideas.",
    date: "October 12, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900",
  },
];

const categories = ["All", "Fashion", "Beauty", "Lifestyle"];

export const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;

    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className={styles.blogPage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>THE ROYAL JOURNAL</span>
          <h1>
            Style, Beauty & <span>Inspiration</span>
          </h1>
          <p>
            Discover the latest trends, styling tips, beauty secrets, and
            inspiration for your everyday life.
          </p>
          <a href="#latest" className={styles.heroButton}>
            Explore Articles <FiArrowRight />
          </a>
        </div>
      </section>

      <section className={styles.featuredSection}>
        <div className={styles.sectionHeading}>
          <span>EDITOR'S PICK</span>
          <h2>Featured Story</h2>
        </div>

        <div className={styles.featuredCard}>
          <div className={styles.featuredImage}>
            <img src={featuredPost.image} alt={featuredPost.title} />
          </div>

          <div className={styles.featuredContent}>
            <span className={styles.category}>{featuredPost.category}</span>

            <h2>{featuredPost.title}</h2>

            <p>{featuredPost.description}</p>

            <div className={styles.postMeta}>
              <span>
                <FiCalendar /> {featuredPost.date}
              </span>
              <span>
                <FiClock /> {featuredPost.readTime}
              </span>
            </div>

            <Link to={`/blog/${featuredPost.id}`} className={styles.readMore}>
              Read Full Story <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.latestSection} id="latest">
        <div className={styles.sectionHeading}>
          <span>EXPLORE OUR JOURNAL</span>
          <h2>Latest Articles</h2>
          <p>Fresh ideas and inspiration, just for you.</p>
        </div>

        <div className={styles.filters}>
          <div className={styles.categories}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category ? styles.activeCategory : ""
                }
              >
                {category}
              </button>
            ))}
          </div>

          <div className={styles.searchBox}>
            <FiSearch />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.blogGrid}>
          {filteredPosts.map((post) => (
            <article className={styles.blogCard} key={post.id}>
              <div className={styles.cardImage}>
                <img src={post.image} alt={post.title} />
                <span>{post.category}</span>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.postMeta}>
                  <span>
                    <FiCalendar /> {post.date}
                  </span>
                  <span>
                    <FiClock /> {post.readTime}
                  </span>
                </div>

                <h3>{post.title}</h3>
                <p>{post.description}</p>

                <Link to={`/blog/${post.id}`} className={styles.readMore}>
                  Read More <FiArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className={styles.noResults}>
            <h3>No articles found</h3>
            <p>Try another search or category.</p>
          </div>
        )}
      </section>

      <section className={styles.newsletter}>
        <div>
          <span>STAY INSPIRED</span>
          <h2>Get the Latest Stories</h2>
          <p>
            Subscribe to our newsletter for fashion inspiration, beauty tips,
            and exclusive updates.
          </p>
        </div>

        <form
          className={styles.newsletterForm}
          onSubmit={(e) => {
            e.preventDefault();
            alert("Newsletter subscription coming soon!");
          }}
        >
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
};
