import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedBlog, setSelectedBlog] = useState(null);

  const BLOGS_API = "https://your-api.com/api/admin/blogs";
  const DELETE_BLOG_API = (id) =>
    `https://your-api.com/api/admin/blogs/${id}`;

  useEffect(() => {
    if (!token || token === "undefined" || token === "null") {
      navigate("/sashaktlogin", { replace: true });
      return;
    }

    const fetchBlogs = async () => {
      try {
        const res = await fetch(BLOGS_API, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.status === 401) throw new Error("unauthorized");
        if (!res.ok) throw new Error("failed");

        const data = await res.json();
        setBlogs(Array.isArray(data.blogs) ? data.blogs : []);
      } catch (err) {
        setError("Unable to load blogs");
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [navigate, token]);

  const handleDelete = async (id) => {
    const ok = window.confirm("Delete this blog permanently?");
    if (!ok) return;

    try {
      const res = await fetch(DELETE_BLOG_API(id), {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error();

      setBlogs((prev) => prev.filter((b) => b.id !== id));
      setSelectedBlog(null);
    } catch {
      alert("Failed to delete blog");
    }
  };

  const renderHtmlContent = (blog) => {
    // If blog has HTML content, render it
    if (blog.html || blog.htmlContent) {
      return (
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{
            __html: blog.htmlContent || blog.html
          }}
        />
      );
    }

    // Fallback to plain text
    return (
      <p className="text-gray-700 whitespace-pre-line">
        {blog.content || blog.excerpt || "No content available"}
      </p>
    );
  };

  const getExcerpt = (blog) => {
    // Try to extract excerpt from HTML content
    if (blog.htmlContent) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = blog.htmlContent;
      const text = tempDiv.textContent || tempDiv.innerText || '';
      return text.substring(0, 150) + (text.length > 150 ? '...' : '');
    }

    return blog.excerpt || blog.content?.substring(0, 150) + '...' || "No description available";
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Blog Posts</h1>
          <button
            onClick={() => navigate("admin/dashboard")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            + Create New Blog
          </button>
        </div>

        {(error || blogs.length === 0) && (
          <div className="bg-white rounded-xl shadow p-8 text-center">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-xl font-medium text-gray-700 mb-2">No blogs available</p>
            <p className="text-gray-500 mb-6">
              {error ? error : "Start creating your first blog post!"}
            </p>
            <button
              onClick={() => navigate("/admin/dashboard")}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Create Your First Blog
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold mb-3 text-gray-800">
                  {blog.title || "Untitled Blog"}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                  {getExcerpt(blog)}
                </p>
                <p className="text-xs text-gray-400">
                  {new Date(blog.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t flex justify-between items-center">
                <button
                  onClick={() => setSelectedBlog(blog)}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View
                </button>

                <button
                  onClick={() => handleDelete(blog.id)}
                  className="text-red-600 hover:text-red-700 font-medium text-sm flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedBlog && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedBlog.title}
                </h2>
                <button
                  onClick={() => setSelectedBlog(null)}
                  className="text-gray-500 hover:text-black text-2xl font-light"
                >
                  ✕
                </button>
              </div>

              <div className="p-6">
                <p className="text-sm text-gray-500 mb-6">
                  Published on {new Date(selectedBlog.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>

                {renderHtmlContent(selectedBlog)}
              </div>

              <div className="sticky bottom-0 bg-white border-t px-6 py-4 flex justify-end gap-4">
                <button
                  onClick={() => handleDelete(selectedBlog.id)}
                  className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Delete Blog
                </button>

                <button
                  onClick={() => setSelectedBlog(null)}
                  className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .prose {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #374151;
        }
        .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
          margin-top: 24px;
          margin-bottom: 16px;
          font-weight: 600;
          color: #111827;
        }
        .prose h1 { font-size: 2em; }
        .prose h2 { font-size: 1.5em; }
        .prose h3 { font-size: 1.25em; }
        .prose p {
          margin-bottom: 16px;
        }
        .prose img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 20px 0;
        }
        .prose figure {
          margin: 20px 0;
        }
        .prose figcaption {
          text-align: center;
          color: #6b7280;
          font-size: 14px;
          margin-top: 8px;
        }
        .prose blockquote {
          border-left: 4px solid #e5e7eb;
          padding-left: 16px;
          margin: 16px 0;
          color: #6b7280;
          font-style: italic;
        }
        .prose code {
          background: #f3f4f6;
          padding: 2px 6px;
          border-radius: 3px;
          font-family: monospace;
          font-size: 0.9em;
        }
        .prose pre {
          background: #1f2937;
          color: #f9fafb;
          padding: 16px;
          border-radius: 8px;
          overflow-x: auto;
          margin: 20px 0;
        }
        .prose pre code {
          background: none;
          padding: 0;
          color: #f9fafb;
        }
        .prose table {
          border-collapse: collapse;
          width: 100%;
          margin: 20px 0;
        }
        .prose th, .prose td {
          border: 1px solid #e5e7eb;
          padding: 12px;
          text-align: left;
        }
        .prose th {
          background: #f3f4f6;
          font-weight: 600;
        }
        .prose ul, .prose ol {
          margin: 16px 0;
          padding-left: 24px;
        }
        .prose li {
          margin: 8px 0;
        }
        .prose .checklist {
          list-style: none;
          padding-left: 0;
        }
        .prose .checklist li {
          margin: 8px 0;
        }
        .prose .warning {
          background: #fef3c7;
          border-left: 4px solid #f59e0b;
          padding: 16px;
          margin: 16px 0;
          border-radius: 4px;
        }
        .prose .warning h4 {
          margin-top: 0;
          color: #92400e;
        }
        .prose .embed {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          margin: 20px 0;
        }
        .prose .embed iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 8px;
        }
        .prose hr {
          border: none;
          border-top: 2px solid #e5e7eb;
          margin: 24px 0;
        }
      `}</style>
    </div>
  );
};

export default Blogs;