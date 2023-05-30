import React, { useState, useRef } from 'react';
import './Advertise.css';

function Advertise() {
  const [image, setImage] = useState(null);
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [reward, setReward] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const fileInputRef = useRef(null); // Define the fileInputRef here

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleImageRemove = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Set the value to an empty string instead of null
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    // Include all form field values for further processing
    const formData = {
      image,
      itemName,
      category,
      location,
      date,
      reward,
      email,
      phone,
      description,
    };
    console.log(formData);
  };

  const getMaxDate = () => {
    const today = new Date();
    const maxDate = new Date(today.getTime() + 20 * 24 * 60 * 60 * 1000);
    return maxDate.toISOString().split('T')[0];
  };

  return (
    <div className="advertise container-def">
      <div>
        <form onSubmit={handleFormSubmit}>
          <div className="form-row">
            <div className="form-column">
            <div
                className="image-field"
                style={{
                  width: '270px',
                  height: '270px',
                  backgroundImage: `url(${image ? URL.createObjectURL(image) : 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png'})`,
                }}
              >
                {image ? (
                  <>
                    <button className="change-image-button" type="button" onClick={handleImageRemove}>
                      Видалити зображення
                    </button>
                  </>
                ) : (
                  <>
                    <input
                      ref={fileInputRef}
                      type="file"
                      className='input-field'
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    <span className="file-name">{image && image.name}</span>
                  </>
                )}
              </div>
            </div>
            <div className="form-column">
              <input
                type="text"
                className='input-field'
                id="itemName"
                placeholder="Назва"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
              <select
                id="category"
                className='input-field'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Виберіть категорію</option>
                <option value="Wallets">Гаманці</option>
                <option value="Electronics">Техніка</option>
                <option value="Bags">Сумки</option>
                <option value="Documents">Документи</option>
                <option value="Pets">Тваринки</option>
                <option value="Keys">Ключі</option>
                <option value="Accessories">Аксесуари</option>
                <option value="Other">Інше...</option>
              </select>
              <input
                type="text"
                id="location"
                className='input-field'
                placeholder='Місце знахідки'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <input
                type="date"
                id="date"
                className='input-field'
                placeholder='Дата знахідки'
                value={date}
                max={getMaxDate()}
                onChange={(e) => setDate(e.target.value)}
              />
              <div className='reward-input'>
              <label htmlFor="reward">Винагорода</label>
              <label className='reward-input-container'>
              <input
                type="checkbox"
                id="reward"
                checked={reward}
                onChange={(e) => setReward(e.target.checked)}
              />
              <span className="checkmark"></span>
              </label>
              </div>
            </div>
            <div className="form-column">
              <input
                type="email"
                placeholder='Email'
                id="email"
                className='input-field'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel"
                id="phone"
                className='input-field'
                placeholder='Телефон'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <textarea
              id="description"
              className='input-field'
              placeholder='Опис'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-row">
            <button className='submit-btn' type="submit">Розмістити оголошення</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Advertise;
