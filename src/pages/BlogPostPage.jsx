import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import matter from 'gray-matter';
import { useState, useEffect } from 'react';
import { Buffer } from 'buffer';
import useAppStore from '../store/useAppStore';
window.Buffer = Buffer;

const BlogPostPage = () => {
  const { slug } = useParams();
  const { setLang } = useAppStore();
  const [post, setPost] = useState(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/posts/${slug}/content.md`);
        const text = await response.text();
        const { data, content } = matter(text);
        setPost(data);
        setContent(content);
      } catch (error) {
        console.error('Error loading post:', error);
      }
    };

    fetchPost();
  }, [slug]);

  useEffect(() => {
    if (post && post.language !== 'en') {
      setLang(post.language);
    }
  }, [post, setLang]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      {post && (
        <>
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <img
            src={`/posts/${slug}/${post.image}`}
            alt={post.title}
            className="w-full my-4"
          />
          <ReactMarkdown
            className="prose max-w-none"
            remarkPlugins={[remarkGfm]}
            components={{
              code({ inline, children, className }) {
                console.log('🚀 ~ code ~ inline:', inline);
                return !inline ? (
                  <SyntaxHighlighter
                    dir="ltr"
                    style={darcula}
                    language={
                      className?.replace(/language-/, '') ?? 'javascript'
                    }
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className="bg-gray-200 p-1 rounded inline">
                    {children}
                  </code>
                );
              },
              img({ src, alt }) {
                return (
                  <img src={src} alt={alt} className="w-full rounded-lg my-4" />
                );
              },
              a({ href, children }) {
                return (
                  <a
                    href={href}
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>

          <hr className="my-4" />
          <p className="text-gray-600">Posted on {post.date}</p>
        </>
      )}
    </div>
  );
};

export default BlogPostPage;
