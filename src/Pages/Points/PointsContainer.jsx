import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Preloader from "../../Components/Preloader/Preloader";
import { deletePoint, getPoints } from "../../Redux/points-reducer";
import AddPointContainer from "./AddPoint/AddPointContainer";
import ChangePointContainer from "./ChangePoint/ChangePointContainer";
import Points from "./Points";
import { setPointResponse } from "./../../Redux/points-reducer";

const PointsContainer = ({
  getPoints,
  points,
  deletePoint,
  response,
  setPointResponse,
  errorResponse,
}) => {
  const [isAddPointActive, setAddPointActive] = useState(false);
  const [isChangePointActive, setChangePointActive] = useState(false);
  const [curPointId, setCurPointId] = useState("");

  useEffect(() => {
    getPoints();
  }, []);

  const handlerAddPoint = () => {
    setAddPointActive(true);
  };

  const handlerChangePoint = (id) => {
    setCurPointId(id);
    setChangePointActive(true);
  };

  const handlerDeletePoint = (id) => {
    deletePoint(id);
  };

  const closePointResponse = () => {
    setPointResponse("");
    window.location.reload();
  };

  if (
    (!points || points.length === 0) &&
    (!errorResponse || errorResponse.length === 0)
  ) {
    return <Preloader />;
  }

  return (
    <>
      {isAddPointActive && (
        <AddPointContainer
          {...{ setAddPointActive, response, closePointResponse }}
        />
      )}
      {isChangePointActive && (
        <ChangePointContainer
          {...{
            setChangePointActive,
            curPointId,
            response,
            closePointResponse,
          }}
        />
      )}
      <Points
        {...{
          points,
          handlerAddPoint,
          isAddPointActive,
          handlerDeletePoint,
          handlerChangePoint,
          isChangePointActive,
          response,
          closePointResponse,
          errorResponse,
        }}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  points: state.points.points,
  response: state.points.response,
  errorResponse: state.points.errorResponse,
});

export default connect(mapStateToProps, {
  getPoints,
  deletePoint,
  setPointResponse,
})(PointsContainer);
