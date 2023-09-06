import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { postAdded } from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const dispatch = useDispatch();

    const users = useSelector(selectAllUsers);

    const onTitleChange = (e) => setTitle(e.target.value);
    const onContentChange = (e) => setContent(e.target.value);
    const onAuthorChange = (e) => setUserId(e.target.value);

    const onSubmit = () => {
        if (title && content) {
            dispatch(postAdded(title, content, userId));

            setTitle('');
            setContent('');
            setUserId('');
        }
    };

    const canSave = Boolean(userId) && Boolean(title) && Boolean(content);

    const usersOptions = users.map((user) => (
        <option value={user.id} key={user.id}>
            {user.name}
        </option>
    ));

    return (
        <section>
            <h2>Add a new post</h2>
            <form action="submit" className="form">
                <div className="form-wrapper">
                    <label htmlFor="postTitle">Post Title:</label>
                    <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChange} />
                    <label htmlFor="postAuthor">Author:</label>
                    <select onChange={onAuthorChange} id="postAuthor" value={userId}>
                        <option value=""></option>
                        {usersOptions}
                    </select>
                    <label htmlFor="contentTitle">Content:</label>
                    <textarea rows="6" type="text" id="content" name="content" value={content} onChange={onContentChange} />
                    <button onClick={onSubmit} type="button" className="form-button" disabled={!canSave}>
                        Save Post
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AddPostForm;
