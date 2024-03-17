const Notification = ({totalState}) => {
  
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
