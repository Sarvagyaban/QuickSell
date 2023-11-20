import React from 'react'

const Card = ({ id, title, tag }) => {
    const cardStyles = {
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5px',
        flexWrap: 'wrap'
      };
    
      const cardContainerStyles = {
        width: '420px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        position: 'relative',
      };
    
      const imageStyles = {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        position: 'absolute',
        top: '10px',
        right: '10px',
      };
    
      const cardContentStyles = {
        padding: '16px',
      };
    
      const textStyles = {
        fontSize: '14px',
        fontFamily: 'Arial, sans-serif',
        color: '#555',
      };
    
      const titleStyles = {
        fontSize: '18px',
        fontWeight: 'bold',
        marginTop: '8px',
      };
    
      const smallBoxStyles = {
        width: '70%',
        height: '20px',
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '0 10px',
      };
    
      const checkboxStyles = {
        backgroundColor: '#e0e0e0',
        border: '1px solid #ccc',
        borderRadius: '50%',
        cursor: 'pointer',
        height: '15px',
        width: '15px',
        marginRight: '5px',
      };
    
    
    return (
    <div style={cardStyles}>
      <div style={cardContainerStyles}>
        <img src={`https://c8.alamy.com/comp/2B07C4E/initial-letter-sb-logo-design-vector-template-sb-letter-logo-design-2B07C4E.jpg`} alt="" style={imageStyles} />
        <div style={cardContentStyles}>
          <div style={textStyles}>{id}</div>
          <div style={titleStyles}>{title}</div>
          <div style={smallBoxStyles}>
            <span style={checkboxStyles}> </span>
            {
                    tag?.map((elem) => {
                        return <div key="{index.id}" className="tags"><span>{elem}</span> </div>
                    })
                }          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
