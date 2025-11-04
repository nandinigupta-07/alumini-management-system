import React from 'react';
import { motion } from 'framer-motion';

function Forum() {
  const [posts, setPosts] = React.useState([
    { id: 1, title: 'Alumni Meetup Recap', content: 'Great sessions and networking!', likes: 3, comments: ['Loved it!'] },
    { id: 2, title: 'Job openings at CloudCore', content: 'We are hiring across teams.', likes: 5, comments: [] },
  ]);
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [commentText, setCommentText] = React.useState('');
  const [activePostId, setActivePostId] = React.useState(null);

  const addPost = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    setPosts((p) => [{ id: Date.now(), title, content, likes: 0, comments: [] }, ...p]);
    setTitle('');
    setContent('');
  };
  const likePost = (id) => setPosts((p) => p.map((x) => x.id === id ? { ...x, likes: x.likes + 1 } : x));
  const addComment = (id) => {
    if (!commentText) return;
    setPosts((p) => p.map((x) => x.id === id ? { ...x, comments: [...x.comments, commentText] } : x));
    setCommentText('');
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-2xl font-bold">Forum</h1>
      <form onSubmit={addPost} className="mt-6 rounded-xl border border-gray-200 bg-white p-6">
        <div className="grid grid-cols-1 gap-3">
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="rounded-md border border-gray-300 px-3 py-2 text-sm" placeholder="Post title" />
          <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={3} className="rounded-md border border-gray-300 px-3 py-2 text-sm" placeholder="Share an update..." />
        </div>
        <div className="mt-3 flex justify-end">
          <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">Post</button>
        </div>
      </form>

      <div className="mt-6 space-y-4">
        {posts.map((post) => (
          <motion.div key={post.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="text-lg font-semibold">{post.title}</div>
            <div className="mt-1 text-gray-700">{post.content}</div>
            <div className="mt-3 flex items-center gap-3 text-sm">
              <button onClick={() => likePost(post.id)} className="rounded-md border border-gray-300 px-3 py-1.5 hover:bg-gray-50">Like ({post.likes})</button>
              <button onClick={() => setActivePostId(activePostId === post.id ? null : post.id)} className="rounded-md border border-gray-300 px-3 py-1.5 hover:bg-gray-50">Comments ({post.comments.length})</button>
            </div>
            {activePostId === post.id && (
              <div className="mt-4">
                <div className="space-y-2">
                  {post.comments.map((c, idx) => (
                    <div key={idx} className="rounded-md bg-gray-50 px-3 py-2 text-sm">{c}</div>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <input value={commentText} onChange={(e) => setCommentText(e.target.value)} className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm" placeholder="Write a comment" />
                  <button onClick={() => addComment(post.id)} className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700">Add</button>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Forum;


