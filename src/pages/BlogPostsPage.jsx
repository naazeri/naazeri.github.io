import { Link } from 'react-router-dom';
// import matter from 'gray-matter';
import { POSTS_LIST } from '../utils/constants';

const BlogPostsPage = () => {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const importPosts = async () => {
  //     try {
  //       setPosts(
  //         await Promise.all(
  //           POSTS_LIST.map(async (post) => {
  //             const response = await fetch(`/posts/${post}/content.txt`);
  //             const text = await response.text();
  //             const { data } = matter(text);
  //             return { ...data, slug: post };
  //           })
  //         )
  //       );
  //     } catch (error) {
  //       console.error('Error loading posts:', error);
  //     }
  //   };

  //   importPosts();
  // }, []);

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Header */}
      <div className="bg-amber-500 rounded-md py-6 mb-8">
        <h1 className="text-3xl font-bold  text-center">Posts</h1>
      </div>

      {/* List of posts */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {POSTS_LIST.map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.slug} className="block">
            {/* Post card */}
            <div className="bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200">
              {/* Post image */}
              <img
                src={`/posts/${post.slug}/cover.webp`}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              {/* Post content */}
              <div className="p-4">
                <h2 className="text-xl font-bold break-words">{post.title}</h2>
                {/* <p className="text-gray-600">{post.date}</p> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPostsPage;
