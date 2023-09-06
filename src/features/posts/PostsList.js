import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const PostsList = () => {
    const posts = useSelector(selectAllPosts);

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    const renderedPosts = orderedPosts.map((post) => (
        <article key={post.id} className="card">
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 300)}</p>

            <div>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </div>

            <ReactionButtons post={post} />
        </article>
    ));

    return (
        <section>
            <h2>Posts</h2>
            <div className="cards-wrapper">{renderedPosts}</div>
        </section>
    );
};

export default PostsList;
