import React, { useState } from 'react';
import img1 from '../../img/profile/user/perfil.jpeg';
import img2 from '../../img/profile/user/hutao.jpg';
import img3 from '../../img/profile/user/user3.jpg';
import img4 from '../../img/profile/user/user4.jpg';
function CommentVid() {
  const [comments, setComments] = useState([
    { id: 1, author: 'Jesus Yabur', content: '¡Excelente curso, me gusta el caldo de pollito :3', img: img1},
    { id: 2, author: 'Eduardo Jiménez', content: 'No me gusto el curso, muy chafa, regresenme mi dinero (soy pobre)', img: img2},
    { id: 3, author: 'Katia Chan', content: 'Hola me gusta el pan de dulce y el hentai', img: img3},
    { id: 4, author: 'Mari Ignot', content: 'Me gustan los sapitos y siempre ando enojada', img: img4},
    { id: 5, author: 'Katia Chan', content: 'Hola me gusta el pan de dulce y el hentai', img: img3},
    { id: 6, author: 'Mari Ignot', content: 'Me gustan los sapitos y siempre ando enojada', img: img4}
    // Puedes agregar más comentarios aquí
  ]);

  const [newContent, setNewContent] = useState('');

  // Supongamos que tienes acceso al nombre del usuario logueado en la variable 'userName'
  const userName = 'Tilin insano';

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
    <div className='com-scroll-container'>
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

      <div className='com-user-ds'>
        {comments.map((comment) => (
          <div key={comment.id}>
            <div className='sep-com-vid-ds'>
            <div className='com-user-profile'>
            <img src={comment.img} alt={comment.img} />
            <div className='com-user-status'>
            <h4>{comment.author}</h4>
            <p>Hace 2 horas</p>
            </div>
            </div>
            <p>{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentVid;
