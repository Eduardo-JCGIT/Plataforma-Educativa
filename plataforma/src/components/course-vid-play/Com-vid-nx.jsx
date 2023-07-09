import React, { useState } from 'react';

function CommentVid() {
  const [comments, setComments] = useState([
    { id: 1, author: 'Jesus Yabur', content: '¡Excelente curso, me gusta el caldo de pollito :3' },
    { id: 2, author: 'Eduardo Jiménez', content: 'No me gusto el curso, muy chafa, regresenme mi dinero (soy pobre)' },
    // Puedes agregar más comentarios aquí
  ]);

  const [newContent, setNewContent] = useState('');

  // Supongamos que tienes acceso al nombre del usuario logueado en la variable 'userName'
  const userName = 'Inicia sesión';

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para agregar un nuevo comentario al estado de comentarios
    const newComment = {
      id: Date.now(),
      author: userName,
      content: newContent,
    };
    setComments([...comments, newComment]);
    setNewContent('');
  };

  return (
    <div>
      <div>
        {comments.map((comment) => (
          <div key={comment.id}>
            <h4>{comment.author}</h4>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tu nombre"
          value={userName}
          readOnly
          required
        />
        <textarea
        className='text-area-course-nx'
          placeholder="Escribe un comentario"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          required
        />
        <br />
        <button type="submit" className='btn-course-commet'>Agregar Comentario</button>
      </form>
    </div>
  );
}

export default CommentVid;
