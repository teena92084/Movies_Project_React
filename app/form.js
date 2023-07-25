


import React, { useState } from 'react';

const Form = ({addMovie}) => {
  // Sample existing movie list data


  const [formData, setFormData] = useState({
    title: '',
    year: '',
    director: '',
    genre: '',
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new movie object with the form data
    const newMovie = {
      title: formData.title,
      year: formData.year,
      director: formData.director,
      genre: formData.genre,
      Description: formData.description,
      rating:0,
    };
    addMovie(newMovie)

    // Reset the form inputss
    setFormData({
      title: '',
      year: '',
      director: '',
      genre: '',
      description: '',
    });
  };

  return (
    <div>
    

      {/* Form to add a new movie */}
      
      {/* <div className='heading'><h2>Add New Movie</h2></div> */}
      <div className='box_form'>
        <div className="Add_1">Add a New Movie</div>
        <div className="Add_2">
          <div className="Add_col3">To add a movie you have to fill a form. The added movie will appear in the list above</div>
        </div>
        <form onSubmit={handleSubmit}>
          <input  class ="name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Movie_name"/><br/>
          <input class="year" type="text" name="year" value={formData.year} onChange={handleChange} placeholder="Year"/><br/>
          <input  class="director" type="text" name="director" value={formData.director} onChange={handleChange} placeholder="Director" /><br/>
          <input  class="genre"type="text" name="genre" value={formData.genre} onChange={handleChange} placeholder="Genre" /><br/>
          <input class="description"type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" /><br/>
          <button type="submit">
            <div className="new">Submit Movie</div>
            <div className="plus">+</div>
          </button>
        </form>
      </div>  
    </div>
  );i
};

export default Form;