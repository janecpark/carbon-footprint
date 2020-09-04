import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FormContext from '../FormContext';
import buildings from '../images/buildings.jpg';
import AlgoliaPlaces from 'algolia-places-react';

const LocationForm = () => {
  const [location, setLocation] = useState('');
  const { formData, setFormData } = useContext(FormContext);
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation('');
    setFormData((prevState) => ({
      ...prevState,
      input_location: location,
    }));
    history.push('/household2');
  };

  const style = {
    backgroundImage: `url('${buildings}`,
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100vw',
  };

  return (
    <div className="LocationForm">
      <form onSubmit={handleSubmit} className="container">
        <h4>Where do you live? </h4>
        <AlgoliaPlaces
          placeholder="Enter zipcode or city"
          options={{
            appId: process.env.ALG_ID,
            apiKey: process.env.ALG_KEY,
            language: 'en',
            countries: ['us'],
            type: 'city',
          }}
          onChange={({ query, rawAnswer, suggestion, suggestionIndex }) =>
            setLocation(suggestion.postcode)
          }
          onSuggestions={({ rawAnswer, query, suggestions }) =>
            console.log(suggestions)
          }
          onCursorChanged={({ rawAnswer, query, suggestion, suggestonIndex }) =>
            console.log(suggestion)
          }
          onLimit={({ message }) => console.log(message)}
          onError={({ message }) => console.log(message)}
        />

        <button className="btn btn-success my-2">Next</button>
      </form>
    </div>
  );
};

export default LocationForm;
