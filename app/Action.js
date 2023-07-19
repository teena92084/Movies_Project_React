
import React from 'react';
const Action = (props) => {


    
    const onLikeClick = () => {
        props.data.rating += 1;
        props.sortMovie();

    }
    const onDislikeClick = () => {
        props.data.rating -= 1;
        props.data.rating = props.data.rating > 0 ? props.data.rating : 0;
        props.sortMovie();
    }
    return (
        <>
            <div className="action">
                <div className="Like" onClick={onLikeClick}>
                    <img src="Icon - Like.svg" width="100%px" height="100%" style={{}} />
                </div>
                <div className="Rating">{props.data.rating}</div>
                <div className="Dislike" onClick={onDislikeClick}>
                    <img src="Icon - disike .svg" width="100%px" height="100%" style={{}} />

                </div>
                <div className="Del" >
                    <img src="fluent_delete-regular.svg" width="100%px" height="100%" onClick={props.deleteMovie}/>
                </div>
                

            </div>
        </>
    );
}

export default Action;




  
  
  
