import React, { useState } from 'react';
import ImgBackProfile from '../../img/profile/backgound/BkProfile.webp';
import ImgIconProfile from '../../img/profile/user/hutao.jpg';

const ProfileBack = () => {

  const [profileImage, setProfileImage] = useState(ImgIconProfile);

  const handleImageChange = (event) => {
    const fileInput = document.getElementById('file-input');
    fileInput.click(); // Simula el click en el input de tipo "file"
  };

  const handleFileChange = (event) => {
    const newImage = event.target.files[0];
    setProfileImage(URL.createObjectURL(newImage)); // Actualiza el estado con la nueva imagen
  };


  return (

    <div>
        <div className='cont-profile-edit'>
        <div className='back-img-user'>
      <img src={ImgBackProfile} alt={ImgBackProfile}/>
        </div>
        <div className='cont-user-profile'>
        <div className='icon-profile-img'>
        <img src={profileImage} alt='Profile' />
        <div>
            <h2>Eduardo Jiménez Cruz</h2>
            <div className='progress-inf-user'>
            <p>Cursos 10</p>
            <p>Preguntas 5</p>
            <p>Respuestas 7</p>
            </div>
        </div>
        </div>
        </div>
        <div className='btn-profile-user-ch'> 
        <button onClick={handleImageChange} className='btn'>Seleccionar imagen</button>
      <input id='file-input' type='file' onChange={handleFileChange} style={{ display: 'none' }} />
            <button className='btn'>Editar fondo</button>
        </div>
        </div>
    </div>
  )
}


export default ProfileBack

