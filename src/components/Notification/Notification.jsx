const Notification = ({cafeState}) => {

    const totalState = cafeState.good+cafeState.bad+cafeState.neutral;
  
    return (
        <>
            {totalState == 0 ? (
                <p>No feedback yet</p>
            ) : (
                <p></p>
            )}
        </>
    );
}

export default Notification;
