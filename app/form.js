


// import React, { useState } from 'react';

// const Form = ({addMovie}) => {
 
//   const [formData, setFormData] = useState({
//     name: '',
//     year: '',
//     genre: '',
//     Description: '',
//     image:null,
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Create a new movie object with the form data
//     const newMovie = {
//       name: formData.name,
//       year: formData.year,
//       genre: formData.genre,
//       Description: formData.Description,
//       image: formData.image,
//       rating:0,
//     };
//     addMovie(newMovie)

//     // Reset the form inputss
//     setFormData({
//       title: '',
//       year: '',
//       genre: '',
//       description: '',
//       image:'',
//     });
//   };

//   return (
//     <div>
    

//       {/* Form to add a new movie */}
      
//       {/* <div className='heading'><h2>Add New Movie</h2></div> */}
//       <div className='box_form'>
//         <div className="Add_1">Add a New Movie</div>
//         <div className="Add_2">
//           <div className="Add_col3">To add a movie you have to fill a form. The added movie will appear in the list above</div>
//         </div><br/>

//         <form onSubmit={handleSubmit}>
//           <div className='N'>Name of Movie</div><br/>
//           <input  class ="name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Movie_name"/><br/>
//           <div className='N'>Year of Realse</div><br/>
//           <input class="year" type="text" name="year" value={formData.year} onChange={handleChange} placeholder="Year"/><br/>
//           <div className='N'>Genre of Movie</div><br/>
//           <input  class="genre"type="text" name="genre" value={formData.genre} onChange={handleChange} placeholder="Genre" /><br/>
//           <div className='N'>Description of Movie</div><br/>
//           <input class="description"type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" /><br/>
//           <div className='N'></div><br/>
//           <button type="submit">
//             <div className="new">Submit Movie</div>
//             <div className="plus">+</div>
//             {/* { createFormUI(formData,handleChange,handleSubmit)} */}
//           </button>
//         </form>
//       </div>  
//     </div>
//   );i
// };

// export default Form;



// import React, { useState } from 'react';

// const Form = ({ addMovie }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     year: '',
//     genre: '',
//     description: '',
//     imge: null, // Initialize image as null
//   });

//   const handleChange = (event) => {
//     const { name, value, type } = event.target;

//     if (type === 'file') {
//       // Handling the image input separately
//       const imageFile = event.target.files[0];
//       setFormData({ ...formData, [name]: imageFile });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Create a new movie object with the form data
//     const newMovie = {
//       name: formData.name,
//       year: formData.year,
//       genre: formData.genre,
//       description: formData.description,
//       imge: formData.image,
//       rating: 0,
//     };

//     addMovie(newMovie);

//     // Reset the form inputs
//     setFormData({
//       name: '',
//       year: '',
//       genre: '',
//       description: '',
//       imge: null, // Reset the image input as well
//     });
//   };

//   return (
//     <div>
//       {/* Form to add a new movie */}
//       <div className='box_form'>
//         <div className='Add_1'>Add a New Movie</div>
//         <div className='Add_2'>
//           <div className='Add_col3'>
//             To add a movie you have to fill a form. The added movie will appear in the list above
//           </div>
//         </div>
//         <br />

//         <form onSubmit={handleSubmit}>
//           <div className='N'>Name of Movie</div>
//           <br />
//           <input
//             className='name'
//             type='text'
//             name='name'
//             value={formData.name}
//             onChange={handleChange}
//             placeholder='Movie_name'
//           />
//           <br />
//           <div className='N'>Year of Release</div>
//           <br />
//           <input
//             className='year'
//             type='text'
//             name='year'
//             value={formData.year}
//             onChange={handleChange}
//             placeholder='Year'
//           />
//           <br />
//           <div className='N'>Genre of Movie</div>
//           <br />
//           <input
//             className='genre'
//             type='text'
//             name='genre'
//             value={formData.genre}
//             onChange={handleChange}
//             placeholder='Genre'
//           />
//           <br />
//           <div className='N'>Description of Movie</div>
//           <br />
//           <input
//             className='description'
//             type='text'
//             name='description'
//             value={formData.description}
//             onChange={handleChange}
//             placeholder='Description'
//           />
//           <br />
//           <div className='N'>Image</div>
//           <br />
//           <input className='imge' type='file' name='imge' onChange={handleChange} accept='imge/*' />
//           <br />

//           {/* Display image preview */}
//           {formData.imge && (
//             <div>
//               <img src={URL.createObjectURL(formData.imge)} alt='Preview' style={{ width: '100px' }} />
//             </div>
//           )}

//           <br />
//           <button type='submit'>
//             <div className='new'>Submit Movie</div>
//             <div className='plus'>+</div>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form;

























// import React, { useState } from 'react';

// const Form = ({ addMovie }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     year: '',
//     genre: '',
//     description: '',
//     image: null, 
//   });

//   const handleChange = (event) => {
//     const { name, value, type } = event.target;

//     if (type === 'file') {
//       // Handling the image input separately
//       const imageFile = event.target.files[0];
//       setFormData({ ...formData, [name]: imageFile });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };
// // import React, { useState } from 'react';

// const Form = ({ addMovie }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     year: '',
//     genre: '',
//     description: '',
//     image: null, 
//   });

//   const [formVisible, setFormVisible] = useState(false); // State to toggle form visibility

//   const handleChange = (event) => {
//     const { name, value, type } = event.target;

//     if (type === 'file') {
//       // Handling the image input separately
//       const imageFile = event.target.files[0];
//       setFormData({ ...formData, [name]: imageFile });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Create a new movie object with the form data
//     const newMovie = {
//       name: formData.name,
//       year: formData.year,
//       genre: formData.genre,
//       description: formData.description,
//       image: formData.image,
//       rating: 0,
//     };

//     addMovie(newMovie);

//     // Reset the form inputs
//     setFormData({
//       name: '',
//       year: '',
//       genre: '',
//       description: '',
//       image: null, 
//     });
//   };

//   const handleToggleForm = () => {
//     setFormVisible((prevFormVisible) => !prevFormVisible);
//   };

//   return (
//     <div>
//       {/* Toggle button */}
//       <button onClick={handleToggleForm}>
//         {formVisible ? 'Hide Form' : 'Show Form'}
//       </button>

//       {/* Form to add a new movie */}
//       {formVisible && (
//         <div className='box_form'>
//           <div className='Add_1'>Add a New Movie</div>
//           <div className='Add_2'>
//             <div className='Add_col3'>
//               To add a movie you have to fill a form. The added movie will appear in the list above
//             </div>
//           </div>
//           <br />

//           <form onSubmit={handleSubmit}>
//             {<form onSubmit={handleSubmit}>
//           <div className='N'>Name of Movie</div>
//           <br />
//           <input
//             className='name'
//             type='text'
//             name='name'
//             value={formData.name}
//             onChange={handleChange}
//             placeholder='Movie_name'
//           />
//           <br />
//           <div className='N'>Year of Release</div>
//           <br />
//           <input
//             className='year'
//             type='text'
//             name='year'
//             value={formData.year}
//             onChange={handleChange}
//             placeholder='Year'
//           />
//           <br />
//           <div className='N'>Genre of Movie</div>
//           <br />
//           <input
//             className='genre'
//             type='text'
//             name='genre'
//             value={formData.genre}
//             onChange={handleChange}
//             placeholder='Genre'
//           />
//           <br />
//           <div className='N'>Description of Movie</div>
//           <br />
//           <input
//             className='description'
//             type='text'
//             name='description'
//             value={formData.description}
//             onChange={handleChange}
//             placeholder='Description'
//           />
//           <br />
//           <div className='N'>Image</div>
//           <br />
//           <input className='image' type='file' name='image' onChange={handleChange} accept='image/*' />
//           <br />
//           {formData.image && (
//             <div>
//               <img src={URL.createObjectURL(formData.image)} alt='Preview' style={{ width: '100px' }} />
//             </div>
//           )}

//           <br/>
//           <button type='submit'>
//             <div className='new'>Submit Movie</div>
//             <div className='plus'>+</div>
//           </button>
//         </form>}
//             {/* ... (form input fields and image preview) ... */}
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// // export default Form;

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Create a new movie object with the form data
//     const newMovie = {
//       name: formData.name,
//       year: formData.year,
//       genre: formData.genre,
//       description: formData.description,
//       image: formData.image,
//       rating: 0,
//     };

//     addMovie(newMovie);

//     // Reset the form inputs
//     setFormData({
//       name: '',
//       year: '',
//       genre: '',
//       description: '',
//       image: null, 
//     });
//   };

//   return (
//     <div>
//       {/* Form to add a new movie */}
//       <div className='box_form'>
//         <div className='Add_1'>Add a New Movie</div>
//         <div className='Add_2'>
//           <div className='Add_col3'>
//             To add a movie you have to fill a form. The added movie will appear in the list above
//           </div>
//         </div>
//         <br />

//         <form onSubmit={handleSubmit}>
//           <div className='N'>Name of Movie</div>
//           <br />
//           <input
//             className='name'
//             type='text'
//             name='name'
//             value={formData.name}
//             onChange={handleChange}
//             placeholder='Movie_name'
//           />
//           <br />
//           <div className='N'>Year of Release</div>
//           <br />
//           <input
//             className='year'
//             type='text'
//             name='year'
//             value={formData.year}
//             onChange={handleChange}
//             placeholder='Year'
//           />
//           <br />
//           <div className='N'>Genre of Movie</div>
//           <br />
//           <input
//             className='genre'
//             type='text'
//             name='genre'
//             value={formData.genre}
//             onChange={handleChange}
//             placeholder='Genre'
//           />
//           <br />
//           <div className='N'>Description of Movie</div>
//           <br />
//           <input
//             className='description'
//             type='text'
//             name='description'
//             value={formData.description}
//             onChange={handleChange}
//             placeholder='Description'
//           />
//           <br />
//           <div className='N'>Image</div>
//           <br />
//           <input className='image' type='file' name='image' onChange={handleChange} accept='image/*' />
//           <br />
//           {formData.image && (
//             <div>
//               <img src={URL.createObjectURL(formData.image)} alt='Preview' style={{ width: '100px' }} />
//             </div>
//           )}

//           <br/>
//           <button type='submit'>
//             <div className='new'>Submit Movie</div>
//             <div className='plus'>+</div>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form;






















// import React, { useState } from 'react';

// const Form = ({ addMovie }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     year: '',
//     genre: '',
//     description: '',
//     image: null, 
//   });

//   const [formVisible, setFormVisible] = useState(false); // State to toggle form visibility

//   const handleChange = (event) => {
//     const { name, value, type } = event.target;

//     if (type === 'file') {
//       // Handling the image input separately
//       const imageFile = event.target.files[0];
//       setFormData({ ...formData, [name]: imageFile });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Create a new movie object with the form data
//     const newMovie = {
//       name: formData.name,
//       year: formData.year,
//       genre: formData.genre,
//       description: formData.description,
//       image: formData.image,
//       rating: 0,
//     };

//     addMovie(newMovie);

//     // Reset the form inputs
//     setFormData({
//       name: '',
//       year: '',
//       genre: '',
//       description: '',
//       image: null, 
//     });
//   };

//   const handleToggleForm = () => {
//     setFormVisible((prevFormVisible) => !prevFormVisible);
//   };

//   return (
//     <div>
//       {/* Toggle button */}
//       <button onClick={handleToggleForm}>
//         {formVisible ? 'Hide Form' : 'Show Form'}
//       </button>

//       {/* Form to add a new movie */}
//       {formVisible && (
//         <div className='box_form'>
//           <div className='Add_1'>Add a New Movie</div>
//           <div className='Add_2'>
//             <div className='Add_col3'>
//               To add a movie you have to fill a form. The added movie will appear in the list above
//             </div>
//           </div>
//           <br />

//           <form onSubmit={handleSubmit}>
//             {<form onSubmit={handleSubmit}>
//           <div className='N'>Name of Movie</div>
//           <br />
//           <input
//             className='name'
//             type='text'
//             name='name'
//             value={formData.name}
//             onChange={handleChange}
//             placeholder='Movie_name'
//           />
//           <br />
//           <div className='N'>Year of Release</div>
//           <br />
//           <input
//             className='year'
//             type='text'
//             name='year'
//             value={formData.year}
//             onChange={handleChange}
//             placeholder='Year'
//           />
//           <br />
//           <div className='N'>Genre of Movie</div>
//           <br />
//           <input
//             className='genre'
//             type='text'
//             name='genre'
//             value={formData.genre}
//             onChange={handleChange}
//             placeholder='Genre'
//           />
//           <br />
//           <div className='N'>Description of Movie</div>
//           <br />
//           <input
//             className='description'
//             type='text'
//             name='description'
//             value={formData.description}
//             onChange={handleChange}
//             placeholder='Description'
//           />
//           <br />
//           <div className='N'>Image</div>
//           <br />
//           <input className='image' type='file' name='image' onChange={handleChange} accept='image/*' />
//           <br />
//           {formData.image && (
//             <div>
//               <img src={URL.createObjectURL(formData.image)} alt='Preview' style={{ width: '100px' }} />
//             </div>
//           )}

//           <br/>
//           <button type='submit'>
//             <div className='new'>Submit Movie</div>
//             <div className='plus'>+</div>
//           </button>
//         </form>}
//             {/* ... (form input fields and image preview) ... */}
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Form;
