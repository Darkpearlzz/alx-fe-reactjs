import { useParams, Link } from "react-router-dom";

export default function BlogPost() {
  const { slug } = useParams();
  const title = slug.replaceAll("-", " ");

  return (
    <article className="space-y-3">
      <h1 className="text-2xl font-semibold capitalize">{title}</h1>
      <p className="text-gray-700">
        Loaded via a <b>dynamic route</b>:{" "}
        <code className="bg-gray-100 px-1 rounded">/blog/:slug</code>.
      </p>
      <Link to="/blog" className="inline-block text-blue-700 hover:underline">
        ← Back to Blog
      </Link>
    </article>
  );
}
