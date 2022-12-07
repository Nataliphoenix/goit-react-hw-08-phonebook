import { Component } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import { BallTriangleContainer } from './Loader.styled.js';

export class Loader extends Component {
  render() {
    return (
      <BallTriangleContainer>
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </BallTriangleContainer>
    );
  }
}
