import React,{useState} from 'react'

export const BlogForm = ({onAddPost}) => {
    const [formData, setFormData] = useState({
        title:"",
        team: "",
        player: "",
        post:""
    })
    function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
    }
    function handleSubmit(event) {
        event.preventDefault();
        const itemData={
          title:formData.title,
          team: formData.team,
          player: formData.player,
          post:formData.post
        }
        fetch("http://localhost:3001/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemData),
      })
        .then((r) => r.json())
        .then((newItem) => onAddPost(newItem));
      }

  return (
    <section>
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Team:
          <input
            type="text"
            name="team"
            value={formData.team}
            onChange={handleChange}
          />
        </label>
        <label>
          Player:
          <input
            type="text"
            name="player"
            value={formData.player}
            onChange={handleChange}
          />
        </label>
        <label>
          Post:
          <input
            type="text"
            name="post"
            value={formData.post}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Post</button>
      </form>
    </section>
  )
}
