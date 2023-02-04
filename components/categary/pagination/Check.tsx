import React, { useState, useMemo } from 'react';
import Pagination from './Pagination';
import data from './mock-data.json';
import Row from './Row';
// import './style.scss';

let PageSize = 10;

export default function Check() {
  
  const [currentPage, setCurrentPage] = useState(1);

  
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map(item => {
            return (
              <Row key={new Date().toString()} item={item} />
            );
          })}
        </tbody>
      </table>
      
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
}
