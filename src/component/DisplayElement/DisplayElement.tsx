import axiosApi from '../../axiosApi.ts';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Content} from '../../types';

const fetchDataMain = async (path: string) => {
  const response = await axiosApi.get(path);
  return response.data;
};

const DisplayElement: React.FC = () => {
  const { pageName } = useParams();
  const [pageData, setPageData] = useState<Content | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchDataMain(`/pages/${pageName}.json`);
        setPageData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

   void fetchData();
  }, [pageName]);

  return (
    <div>
      {pageData && (
        <div className="mt-3">
          <div className="p-5">
            <h2>{pageData.title}</h2>
            <p className="w-50">{pageData.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayElement;

