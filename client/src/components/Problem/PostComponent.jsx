import React, { useState, useRef, useEffect } from 'react';
import '../../CSS/PostComponent.css';  // Importing the external CSS file

const PostComponent = () => {
  const [text, setText] = useState('');
  const [photo, setPhoto] = useState(null);
  const [audioURL, setAudioURL] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [posts, setPosts] = useState([]);
  const mediaRecorderRef = useRef(null);
  const chunks = useRef([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handlePhotoCapture = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
        storePost({ type: 'photo', content: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (e) => chunks.current.push(e.data);
      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunks.current, { type: 'audio/ogg; codecs=opus' });
        const url = URL.createObjectURL(blob);
        setAudioURL(url);
        storePost({ type: 'audio', content: url });
        chunks.current = [];
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
    });
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  const storePost = (post) => {
    const newPost = { ...post, timestamp: new Date().toISOString() };
    const updatedPosts = [...posts, newPost];

    setPosts(updatedPosts); // Update state
    localStorage.setItem('posts', JSON.stringify(updatedPosts)); // Store in localStorage
  };

  const handlePostText = () => {
    if (text.trim()) {
      storePost({ type: 'text', content: text });
      setText('');
    }
  };

  return (
    <div className="post-container">
      <div>
        {posts.map((post, index) => (
          <div key={index} className="post">
            {post.type === 'text' && <p>{post.content}</p>}
            {post.type === 'photo' && <img src={post.content} alt="User Post" />}
            {post.type === 'audio' && <audio controls src={post.content} />}
            <p><small>{new Date(post.timestamp).toLocaleString()}</small></p>
          </div>
        ))}
      </div>
      <hr />
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Write something..."
      />
      <br />

      {/* Photo Capture */}
      <input type="file" accept="image/*" capture="camera" onChange={handlePhotoCapture} />
      {photo && <img src={photo} alt="Captured" />}
      <br />

      {/* Voice Recording */}
      <button onClick={isRecording ? stopRecording : startRecording} className='ProbblemButton'>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      {audioURL && (
        <div>
          <audio controls src={audioURL} />
        </div>
      )}
      <br />

      {/* Submit Button */}
      <button onClick={handlePostText} className='ProbblemButton'>Post Text</button>
    </div>
  );
};

export default PostComponent;