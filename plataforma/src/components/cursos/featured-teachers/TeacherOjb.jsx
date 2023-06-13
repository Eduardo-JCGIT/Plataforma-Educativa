import TeaView1 from '../../../img/teachers/Curso-profesores-destacados/1Teacher.jpg';
import TeaView2 from '../../../img/teachers/Curso-profesores-destacados/2Teacher.jpg';
import TeaView3 from '../../../img/teachers/Curso-profesores-destacados/3Teacher.jpg';
import TeaView4 from '../../../img/teachers/Curso-profesores-destacados/4Teacher.jpg';
import TeaView5 from '../../../img/teachers/Curso-profesores-destacados/5Teacher.jpg';
import TeaView6 from '../../../img/teachers/Curso-profesores-destacados/6Teacher.jpg';
const TeacherObj = [

  {
    id: 1,
    image: TeaView1,
  },
  {
    id: 2,
    image: TeaView2,
  },
  {
    id: 3,
    image: TeaView3,
  },
  {
    id: 4,
    image: TeaView4,
    
  },
  {
    id: 5,
    image: TeaView5,
  },
  {
    id: 6,
    image: TeaView6,
  },
  
];

const TeacherView = () => {
  return (
    <div className="img-teach-feat">
      {TeacherObj.map((card) => (
        <div className="img-internal" key={card.id}>
          <img src={card.image} alt={card.image}/>
          <button className='btn-teach-feat'>Ver cursos</button>
        </div>
      ))}
    </div>
  )
};

export default TeacherView;