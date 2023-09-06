import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { postAdded } from './postsSlice';

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const onTitleChange = (e) => setTitle(e.target.value);
    const onContentChange = (e) => setContent(e.target.value);

    const onSubmit = () => {
        if (title && content) {
            dispatch(postAdded(title, content));

            setTitle('');
            setContent('');
        }
    };

    return (
        <section>
            <h2>Add a new post</h2>
            <form action="submit" className="form">
                <div className="form-wrapper">
                    <label htmlFor="postTitle">Post Title:</label>
                    <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChange} />
                    <label htmlFor="contentTitle">Content:</label>
                    <textarea rows="6" type="text" id="content" name="content" value={content} onChange={onContentChange} />
                    <button onClick={onSubmit} type="button" className="form-button">
                        Save Post
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AddPostForm;
