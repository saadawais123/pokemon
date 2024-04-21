// components/SkeletonLoader.js
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.div`
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #3498db;
  width: 25px;
  height: 25px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function SkeletonLoader() {
  return (
    <LoaderContainer>
      <Loader />
    </LoaderContainer>

    // {/* <h1>
    //   <Skeleton height={30} width={200} />
    // </h1>
    // <ul>
    //   {Array.from({ length: 5 }).map((_, index) => (
    //     <li key={index}>
    //       <Skeleton height={20} width={200} />
    //     </li>
    //   ))}
    // </ul> */}
  );
}

export default SkeletonLoader;
