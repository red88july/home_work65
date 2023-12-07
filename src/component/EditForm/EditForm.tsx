import axiosApi from '../../axiosApi.ts';
import React, {useCallback, useState, useEffect} from 'react';
import {Content} from '../../types';
import '../../styles.css';
import Spinner from '../Spinner/Spinner';
import TypeWriter from '../../images/ic-typewriter.png';

const EditForm: React.FC = () => {
  const [content, setContent] = useState<Content>({
    title: '',
    content: '',
  });

  const [loading, setLoading] = useState(false);
  const [selectedPage, setSelectedPage] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosApi.get(`/pages/${selectedPage}.json`);
        setContent(response.data);
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    };

    if (selectedPage) {
      fetchData();
    }
  }, [selectedPage]);

  const inputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const {name, value} = event.target;
      if (value === '') {
          alert (`Field ${name} is not to be empty.`);
          return;
      } else {
        setContent((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }
    },
    []
  );

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const contentData = {
        title: content.title,
        content: content.content,
      };

      await axiosApi.put(`/pages/${selectedPage}.json`, contentData);
    } catch (error) {
      console.error(`Error while submitting form: ${error}`);
    } finally {
      setLoading(false);

      setContent({
        title: '',
        content: '',
      });

      setSelectedPage('');
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <form onSubmit={onFormSubmit} className="bg-light p-3 border border-4 rounded-3 input-form mt-4">
          <div className="d-flex justify-content-center align-items-center">
            <div className="w-50 pb-3 mb-5 text-center border-2 border-bottom border-secondary">
              <img src={TypeWriter} alt="Typywriter icon"/>
            </div>
          </div>
          <div className="mb-3">
            <div className="form-group mb-3">
              <label htmlFor="type">Choose page for edit</label>
              <select
                className="form-select"
                value={selectedPage}
                onChange={(e) => setSelectedPage(e.target.value)}
                required autoFocus>
                <option value="">Choose page</option>
                <option value="home">Home</option>
                <option value="about">About</option>
                <option value="contacts">Contacts</option>
                <option value="divisions">Divisions</option>
                <option value="elonmusk">About Elon Musk</option>
              </select>
            </div>
            <label htmlFor="title-input" className="form-label">
              Edit title
            </label>
            <input
              name="title"
              value={content.title}
              onChange={inputChange}
              className="form-control input-title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="input-message" className="form-label">
              Edit content
            </label>
            <textarea
              name="content"
              value={content.content}
              onChange={inputChange}
              className="form-control input-content"
            />
          </div>
          <button type="submit" className="btn btn-success">
            Save
          </button>
        </form>
      </div>
      {loading && <Spinner/>}
    </>
  );
};

export default EditForm;

